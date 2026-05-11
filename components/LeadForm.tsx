"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const trades = [
  "Builder / General",
  "Electrician",
  "Plumber / Heating",
  "Roofer",
  "Joiner / Carpenter",
  "Plasterer",
  "Tiler",
  "Decorator",
  "Landscaper",
  "Other",
];

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("success");
    } catch (err) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
      setState("error");
    }
  }

  if (state === "success") {
    return <SuccessPanel />;
  }

  return (
    <form
      onSubmit={onSubmit}
      id="signup"
      className="relative bg-black-2 border-[3px] border-hazard p-6 sm:p-8"
      style={{ boxShadow: "10px 10px 0 0 #ffe600" }}
    >
      <div className="hazard-tape-thin h-3 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6" />

      <div className="flex items-center gap-3 mb-2">
        <span className="size-3 rounded-full bg-green beacon" />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-hazard">
          Live · We Ring You In 10 Seconds
        </span>
      </div>

      <h3 className="font-display uppercase text-bone text-3xl sm:text-4xl leading-[0.9] tracking-tight">
        Three boxes. One phone call. No tie-in.
      </h3>
      <p className="mt-3 text-bone/70 text-[15px] max-w-md">
        We&apos;ll ring you back in 10 seconds. The AI does the talking. You decide if you&apos;re in.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <Field>
          <Label>Your Name</Label>
          <input
            required
            name="name"
            placeholder="Daz Kowalski"
            autoComplete="name"
            className="field"
          />
        </Field>

        <Field>
          <Label>Mobile (we call this number)</Label>
          <input
            required
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="07700 900123"
            pattern="[0-9+\s()-]{9,}"
            className="field"
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <Label>Your Trade</Label>
            <select required name="trade" className="field appearance-none">
              <option value="">Pick one</option>
              {trades.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
          <Field>
            <Label>Town / Postcode</Label>
            <input
              required
              name="location"
              placeholder="Manchester / M14"
              autoComplete="postal-code"
              className="field"
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="cta-primary mt-7 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <span className="size-3 rounded-full bg-black animate-pulse" />
            Ringing your phone…
          </>
        ) : (
          <>
            Sign Me Up Now
            <span>📞</span>
          </>
        )}
      </button>

      {state === "error" && (
        <p className="mt-4 text-rust text-sm font-mono">
          Didn&apos;t send ({errorMsg}). Try again, or come back to the stand.
        </p>
      )}

      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/60">
        <li>✓ No setup fee</li>
        <li>✓ Stop any time</li>
        <li>✓ We don&apos;t sell your number</li>
        <li>✓ We don&apos;t ring you again if you say no</li>
        <li>✓ A real person if you ask</li>
        <li>✓ £1,000/mo flat</li>
      </ul>
    </form>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <label className="block">{children}</label>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-bone/70 mb-2">
      {children}
    </span>
  );
}

function SuccessPanel() {
  return (
    <div
      id="signup"
      className="relative bg-bone text-black border-[3px] border-black p-6 sm:p-10 text-center"
      style={{ boxShadow: "10px 10px 0 0 #2fcb4f" }}
    >
      <div className="mx-auto size-20 rounded-full bg-green grid place-items-center border-[3px] border-black beacon">
        <span className="font-display text-3xl text-black">✓</span>
      </div>
      <h3 className="mt-5 font-display uppercase text-black text-3xl sm:text-4xl leading-tight">
        Got it. Ringing your phone now.
      </h3>
      <p className="mt-3 text-black/75 max-w-md mx-auto">
        Keep your phone in your hand — the AI is calling you in 10 seconds.
        Pick up. Cut it off. Try and catch it out. This call IS the demo.
      </p>
      <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-black text-hazard font-mono text-[11px] uppercase tracking-[0.18em]">
        <span className="size-2 rounded-full bg-green beacon" />
        Calling you back in 10 seconds
      </div>
    </div>
  );
}
