"use client";

import { useState } from "react";

const items = [
  {
    q: "What if I'm on the tools all day?",
    a: "That's the whole point. The AI takes the call. It finds out what they need. It books them in. The job pops up on your phone. You don't pick up. You don't ring anyone back. You just see the booking.",
  },
  {
    q: "How long am I tied in for?",
    a: "You're not. It's month-by-month. Stop any time with 30 days' notice. And if we don't hit our '10 leads in your first month' promise, that month is free — we take it off your bill before you even ask.",
  },
  {
    q: "When do the leads start coming in?",
    a: "Setup takes 2 to 3 weeks depending on your digital readiness — how much of your Google Business Profile, website, and ad accounts are already in shape. We sort out your Google ads, plug in your trades and postcodes, and teach the AI about your business. Once we go live, you're guaranteed at least 10 real leads in your first month — or that month is on us.",
  },
  {
    q: "Will customers know they're talking to an AI?",
    a: "Most don't twig. The voice listens while it talks — so if you cut in, it cuts back, just like a real chat. If they ask straight up, the AI tells them. Customers say it sounds better than the foreign call centres.",
  },
  {
    q: "How do I know what was said on the call?",
    a: "Every call is recorded and typed out word-for-word. Then we send you a short summary: their name, address, what the job is, roughly what they'll spend, and when they'd like a call back. No sitting through a 14-minute recording.",
  },
  {
    q: "Can I hear the AI before I sign up?",
    a: "Yes — that IS the demo. Drop your number below. The AI rings you in 10 seconds. Cut it off. Ask it about your trade. Try and catch it out. That call IS the sales pitch.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-hazard mb-3">
            ↳ Yeah But What About…
          </div>
          <h2 className="font-display uppercase text-bone text-[clamp(2rem,6vw,4rem)] leading-[0.9] tracking-tight">
            The stuff
            <br />
            <span className="text-bone/40">you&apos;re about to ask.</span>
          </h2>
        </div>

        <div className="border-t-2 border-bone/15">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b-2 border-bone/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-sign font-black text-hazard text-2xl leading-none w-8 shrink-0">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="font-display uppercase text-bone text-lg sm:text-2xl tracking-tight leading-tight group-hover:text-hazard transition-colors">
                      {it.q}
                    </span>
                  </span>
                  <span
                    className={`shrink-0 mt-1 size-8 grid place-items-center border-2 border-bone/40 font-display text-bone transition-transform ${isOpen ? "bg-hazard text-black border-black rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-12 pr-6 text-bone/75 text-[15px] leading-relaxed max-w-3xl">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
