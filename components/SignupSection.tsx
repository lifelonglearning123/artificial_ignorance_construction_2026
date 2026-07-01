import { LeadForm } from "./LeadForm";

export function SignupSection() {
  return (
    <section id="signup-anchor" className="relative bg-black-2 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-50" />

      {/* oversized backdrop word */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-6 text-center font-display uppercase text-bone/[0.04] text-[24vw] leading-none select-none"
      >
        SIGN UP
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-hazard mb-3">
              ↳ The Last Scroll
            </div>
            <h2 className="font-display uppercase text-bone text-[clamp(2.2rem,7vw,5rem)] leading-[0.88] tracking-tight">
              Stop reading.
              <br />
              <span className="bg-hazard text-black px-2 inline-block">
                Start the demo.
              </span>
            </h2>
            <p className="mt-5 text-bone/80 text-lg max-w-md leading-snug">
              You scanned the banner because you&apos;re losing calls — and losing
              jobs. Three boxes. One phone call. Ten seconds. You&apos;ll know
              if it works for your trade. No hard sell — the AI does the talking
              and either earns it or it doesn&apos;t.
            </p>

            <ul className="mt-7 space-y-3 max-w-md">
              {[
                ["£1,000/mo", "One-eighth the cost of a real team, working three times the hours"],
                ["~£220k/mo", "Of work, if an average job is worth £10k"],
                ["Live", "A lead a day — 10 min in month one or it's free"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline gap-4 border-b border-bone/15 pb-3">
                  <span className="font-sign font-black text-hazard text-2xl shrink-0 w-32">
                    {k}
                  </span>
                  <span className="text-bone/80 text-[15px]">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
