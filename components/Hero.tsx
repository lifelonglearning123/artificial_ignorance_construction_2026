import { HazardTape } from "./HazardTape";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HazardTape text="A Job A Day. Starting Week One." />

      <div className="relative blueprint-grid bg-black">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 pt-10 pb-14 sm:pt-16 sm:pb-20">
          <div className="flex items-center gap-3 mb-6 rise" style={{ animationDelay: "60ms" }}>
            <span className="inline-block size-3 rounded-full bg-green beacon" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70">
              Live Demo · We Call You Back In Under A Minute
            </span>
          </div>

          <h1
            className="font-display uppercase leading-[0.88] tracking-[-0.01em] text-bone text-[clamp(2.6rem,9.2vw,6.5rem)] rise"
            style={{ animationDelay: "120ms" }}
          >
            Guaranteed
            <br />
            <span className="bg-hazard text-black px-2 inline-block -skew-x-3">
              Daily Leads.
            </span>
            <br />
            Starting Week One.
          </h1>

          <p
            className="mt-6 max-w-xl text-bone/85 text-lg sm:text-xl leading-snug rise"
            style={{ animationDelay: "240ms" }}
          >
            We pay for your{" "}
            <span className="underline decoration-hazard decoration-[3px] underline-offset-2">
              Google ads
            </span>
            , answer every call{" "}
            <span className="underline decoration-hazard decoration-[3px] underline-offset-2">
              day and night
            </span>
            , and put the jobs straight on your phone.
            <br />
            <span className="font-display uppercase text-hazard text-xl sm:text-2xl">
              You don&apos;t lift a finger.
            </span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center rise" style={{ animationDelay: "340ms" }}>
            <a
              href="#signup"
              className="cta-primary !w-full sm:!w-auto sm:px-9"
            >
              Sign Me Up Now
              <span className="text-black/60">↓</span>
            </a>
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-bone/70">
              <span className="size-2 rounded-full bg-green" />
              No setup fee · Cancel anytime
            </div>
          </div>

          {/* The "receipt" math snapshot */}
          <div
            className="mt-12 grid grid-cols-3 gap-px bg-bone/20 brutal-border-bone max-w-2xl rise"
            style={{ animationDelay: "480ms" }}
          >
            <Stat top="£1,000" sub="what we charge / month" />
            <Stat top="£2,400" sub="a UK PA / month" struck />
            <Stat top="£220,000" sub="in jobs / month" highlight />
          </div>
        </div>

        {/* Decorative oversized number */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 -bottom-10 font-sign font-black text-bone/[0.04] text-[26vw] leading-none select-none"
        >
          24/7
        </div>
      </div>

      <HazardTape text="No Voicemail · No Missed Calls · No Excuses" speed="slow" />
    </section>
  );
}

function Stat({
  top,
  sub,
  struck = false,
  highlight = false,
}: {
  top: string;
  sub: string;
  struck?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`px-3 py-4 text-center ${highlight ? "bg-hazard text-black" : "bg-black text-bone"}`}
    >
      <div
        className={`font-sign font-black text-[clamp(1.4rem,5vw,2.6rem)] leading-none ${struck ? "line-through decoration-rust decoration-[3px] opacity-70" : ""}`}
      >
        {top}
      </div>
      <div
        className={`mt-1 font-mono text-[10px] uppercase tracking-[0.14em] ${highlight ? "text-black/70" : "text-bone/60"}`}
      >
        {sub}
      </div>
    </div>
  );
}
