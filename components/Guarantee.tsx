export function Guarantee() {
  return (
    <section className="relative paper py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 hazard-tape h-3" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 hazard-tape h-3" aria-hidden />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Stamp seal */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative" style={{ transform: "rotate(-6deg)" }}>
              <div className="size-[260px] sm:size-[320px] rounded-full border-[6px] border-rust grid place-items-center bg-bone relative">
                <div className="absolute inset-3 rounded-full border-[3px] border-rust/70" />
                <div className="absolute inset-7 rounded-full border-[2px] border-dashed border-rust/50" />
                <div className="text-center px-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-rust">
                    The Artificial Ignorance
                  </div>
                  <div className="font-display uppercase text-rust text-4xl sm:text-5xl leading-none mt-2">
                    10 Leads
                  </div>
                  <div className="font-display uppercase text-rust text-4xl sm:text-5xl leading-none">
                    Month One
                  </div>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-rust">
                    No Leads · No Pay
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-black text-hazard font-display uppercase text-sm px-3 py-1 border-2 border-bone" style={{ transform: "rotate(8deg)" }}>
                Cert. #AI-2026-UK
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-rust mb-3">
              ↳ Skin In The Game
            </div>
            <h2 className="font-display uppercase text-black text-[clamp(2rem,6.5vw,4.6rem)] leading-[0.9] tracking-tight">
              10 real leads in your first month.
              <br />
              <span className="bg-black text-hazard px-2 inline-block">
                Or that month is free.
              </span>
            </h2>
            <p className="mt-6 text-black/80 text-lg max-w-xl leading-snug">
              We&apos;ve put it in writing. Setup takes 2 to 3 weeks depending
              on how much of your digital setup is already in place. Once
              we&apos;re live, if we don&apos;t put{" "}
              <strong className="text-black">at least 10 real leads</strong>{" "}
              on your phone in your first month,{" "}
              <strong className="text-black">that whole month is on us</strong>.
              No arguing. No &quot;but Google changed&quot;. No small print.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {[
                "We risk the ad money",
                "We risk answering every call",
                "We risk the jobs being real",
                "You just do the work",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-black/85 text-[15px]">
                  <span className="mt-1 size-4 shrink-0 bg-green border-2 border-black grid place-items-center text-black text-[11px] font-display">
                    ✓
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
