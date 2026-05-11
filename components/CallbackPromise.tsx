export function CallbackPromise() {
  const steps = [
    {
      n: "01",
      title: "You drop your number",
      sub: "Name, phone, your trade. 15 seconds. Three boxes.",
    },
    {
      n: "02",
      title: "Our AI rings you in 10 seconds",
      sub: "Pick up. Cut it off. Ask it anything. This IS the demo.",
    },
    {
      n: "03",
      title: "You sign up or you walk",
      sub: "Like it? We set you up there and then. Don't? We don't ring you again.",
    },
  ];

  return (
    <section className="paper-rough relative py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 hazard-tape-thin h-4" aria-hidden />

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust mb-2">
              How This Page Works ↓
            </div>
            <h2 className="font-display uppercase text-black text-[clamp(2rem,6vw,4rem)] leading-[0.9] tracking-tight">
              Three things happen
              <br />
              <span className="bg-black text-hazard px-2 inline-block">
                in the next 10 seconds.
              </span>
            </h2>
          </div>
          <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-black/60 max-w-xs">
            ↳ You scanned the banner. So we&apos;ll show you it works — right now, on your phone — before you pay a penny.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`relative bg-bone border-[3px] border-black p-6 ${i === 1 ? "md:translate-y-3" : ""} ${i === 0 ? "md:-rotate-1" : ""} ${i === 2 ? "md:rotate-1" : ""}`}
              style={{
                boxShadow: "8px 8px 0 0 #0a0a0b",
              }}
            >
              <div className="absolute -top-4 -left-3 bg-black text-hazard font-display text-2xl px-3 py-1">
                {s.n}
              </div>
              <h3 className="mt-4 font-display uppercase text-black text-2xl leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-black/75 text-[15px] leading-snug">
                {s.sub}
              </p>
              {i === 1 && (
                <div className="mt-5 flex items-center gap-2 text-green-deep">
                  <span className="size-2.5 rounded-full bg-green beacon" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-black">
                    Most calls back in 10 seconds
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
