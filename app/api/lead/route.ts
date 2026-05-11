import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  trade?: string;
  location?: string;
};

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";
const SOURCE = "Construction Expo 2026";
const TAG = "construction2026";

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { name, phone, trade, location } = body;
  if (!name || !phone) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const { firstName, lastName } = splitName(name);

  const ghlApiKey = process.env.GHL_API_KEY;
  const ghlLocationId = process.env.GHL_LOCATION_ID;
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (ghlApiKey && ghlLocationId) {
    const result = await sendToGHL({
      apiKey: ghlApiKey,
      locationId: ghlLocationId,
      firstName,
      lastName,
      phone,
      trade,
      location,
    });
    if (!result.ok) {
      console.error("[lead] GHL error:", result.status, result.detail);
      return NextResponse.json(
        { error: "ghl_failed", status: result.status },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, dispatched: "ghl", contactId: result.contactId });
  }

  const fallbackPayload = {
    name,
    firstName,
    lastName,
    phone,
    trade: trade ?? null,
    location: location ?? null,
    source: SOURCE,
    tag: TAG,
    submittedAt,
    userAgent: req.headers.get("user-agent") ?? null,
    referer: req.headers.get("referer") ?? null,
  };

  if (!webhookUrl) {
    console.warn("[lead] No GHL_* or LEAD_WEBHOOK_URL set — logging only:", fallbackPayload);
    return NextResponse.json({ ok: true, dispatched: false });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fallbackPayload),
    });
    if (!upstream.ok) {
      console.error("[lead] webhook non-2xx:", upstream.status);
      return NextResponse.json(
        { error: "webhook_failed", status: upstream.status },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[lead] webhook error:", err);
    return NextResponse.json({ error: "webhook_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, dispatched: "webhook" });
}

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim().replace(/\s+/g, " ");
  const parts = trimmed.split(" ");
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

async function sendToGHL(args: {
  apiKey: string;
  locationId: string;
  firstName: string;
  lastName: string;
  phone: string;
  trade?: string;
  location?: string;
}) {
  const tags = [TAG];
  if (args.trade) tags.push(slugify(args.trade));

  const payload = {
    locationId: args.locationId,
    firstName: args.firstName,
    lastName: args.lastName,
    name: `${args.firstName} ${args.lastName}`.trim(),
    phone: args.phone,
    source: SOURCE,
    tags,
    city: args.location ?? undefined,
    country: "GB",
  };

  let res: Response;
  try {
    res = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${args.apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    return { ok: false as const, status: 0, detail: String(err) };
  }

  const text = await res.text();

  if (res.status === 200 || res.status === 201) {
    const json = safeJson(text);
    return {
      ok: true as const,
      contactId: json?.contact?.id ?? json?.id ?? null,
    };
  }

  if (res.status === 400 && /duplicate/i.test(text)) {
    const json = safeJson(text);
    const existingId =
      json?.meta?.contactId ?? json?.contactId ?? json?.contact?.id ?? null;
    if (existingId) {
      await addTagToContact({
        apiKey: args.apiKey,
        contactId: existingId,
        tags,
      });
      return { ok: true as const, contactId: existingId };
    }
  }

  return { ok: false as const, status: res.status, detail: text.slice(0, 500) };
}

async function addTagToContact(args: {
  apiKey: string;
  contactId: string;
  tags: string[];
}) {
  try {
    await fetch(`${GHL_API_BASE}/contacts/${args.contactId}/tags`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${args.apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ tags: args.tags }),
    });
  } catch (err) {
    console.error("[lead] tag-add error:", err);
  }
}

function safeJson(text: string): any {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
