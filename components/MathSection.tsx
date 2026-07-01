export function MathSection() {
  return (
    <section className="relative bg-black py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-hazard mb-3">
            ↳ The Maths On A Napkin
          </div>
          <h2 className="font-display uppercase text-bone text-[clamp(2rem,6.5vw,4.5rem)] leading-[0.88] tracking-tight">
            One grand a month.
            <br />
            <span className="text-hazard">Two hundred and twenty grand</span> of
            work.
          </h2>
        </div>

        {/* Receipt-style breakdown */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Left: cost comparison */}
          <div className="lg:col-span-2 paper p-6 sm:p-8 brutal-border-bone ticket-tilt-l">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/60">
              Hiring The Team
            </div>

            <div className="mt-4 space-y-3">
              <Row label="A UK PA" value="£2,400 / mo" />
              <Row label="A marketing manager" value="£3,000 / mo" />
              <Row label="A sales manager" value="£3,000 / mo" />
            </div>

            <div className="mt-5 pt-4 border-t-2 border-dashed border-black/30">
              <div className="flex items-baseline justify-between">
                <span className="font-display uppercase text-black text-base">Total / month</span>
                <span className="font-sign font-black text-black text-3xl">£8,400</span>
              </div>
              <div className="mt-3 space-y-2">
                <Row label="Sick days" value="they take them" muted />
                <Row label="Calls after 5pm" value="all missed" muted />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-dashed border-black/30">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/60">
                Or Us — Does The Lot
              </div>
              <div className="mt-2 space-y-3">
                <Row label="What we charge" value="£1,000 / mo" bold />
                <Row label="Google ads" value="we pay for them" bold />
                <Row label="Hours we work" value="all of them" bold />
                <Row label="Sick days" value="never" bold />
              </div>
            </div>

            <div className="mt-6 hazard-tape-thin h-3" />
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-display uppercase text-black text-xl">You save</span>
              <span className="font-sign font-black text-black text-4xl">
                £7,400/mo
              </span>
            </div>
          </div>

          {/* Right: opportunity math */}
          <div className="lg:col-span-3 relative bg-hazard text-black p-6 sm:p-10 border-[3px] border-black ticket-tilt-r" style={{ boxShadow: "10px 10px 0 0 #0a0a0b" }}>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/70">
              The Work Maths · per month
            </div>

            <div className="mt-6 space-y-5">
              <MathLine
                a="£10,000"
                op="×"
                b="22 jobs"
                eq="£220,000"
                note="Size of an average job × jobs we send you"
              />
              <MathLine
                a="£220,000"
                op="−"
                b="£1,000"
                eq="£219,000"
                note="That's what you keep. Every. Month."
              />
            </div>

            <div className="mt-8 pt-6 border-t-[3px] border-black/30">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/70">
                Even if we only sent you HALF
              </div>
              <div className="mt-2 flex items-baseline gap-3 flex-wrap">
                <span className="font-display uppercase text-black text-2xl sm:text-3xl">
                  You&apos;d still have
                </span>
                <span className="font-sign font-black text-black text-5xl sm:text-6xl leading-none">
                  £110,000
                </span>
                <span className="font-display uppercase text-black/70 text-xl">
                  of work lined up.
                </span>
              </div>
            </div>

            <p className="mt-6 text-black/80 text-[13px] font-mono uppercase tracking-[0.1em]">
              ↳ Based on average UK building job sizes. Your trade and your town might be different — we&apos;ll work out your real number when we call you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, bold = false, muted = false }: { label: string; value: string; bold?: boolean; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className={`text-[15px] ${muted ? "text-black/50" : "text-black/75"} ${bold ? "font-semibold text-black" : ""}`}>
        {label}
      </span>
      <span className={`font-mono text-[13px] ${bold ? "font-bold text-black" : "text-black/80"}`}>
        {value}
      </span>
    </div>
  );
}

function MathLine({ a, op, b, eq, note }: { a: string; op: string; b: string; eq: string; note: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-3 flex-wrap font-sign font-black text-black">
        <span className="text-3xl sm:text-4xl">{a}</span>
        <span className="text-2xl text-black/50">{op}</span>
        <span className="text-3xl sm:text-4xl">{b}</span>
        <span className="text-2xl text-black/50">=</span>
        <span className="text-4xl sm:text-5xl shimmer-text inline-block">{eq}</span>
      </div>
      <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-black/60">
        {note}
      </div>
    </div>
  );
}
