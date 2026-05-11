import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  trade?: string;
  location?: string;
};

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

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const source = "construction-expo-2026";
  const submittedAt = new Date().toISOString();

  const payload = {
    name,
    phone,
    trade: trade ?? null,
    location: location ?? null,
    source,
    submittedAt,
    userAgent: req.headers.get("user-agent") ?? null,
    referer: req.headers.get("referer") ?? null,
  };

  if (!webhookUrl) {
    console.warn("[lead] LEAD_WEBHOOK_URL not set — logging only:", payload);
    return NextResponse.json({ ok: true, dispatched: false });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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

  return NextResponse.json({ ok: true, dispatched: true });
}
