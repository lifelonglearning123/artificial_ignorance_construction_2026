const caseStudies = [
  {
    trade: "Roofer · Birmingham",
    delta: "£48,200",
    deltaSub: "booked in month 1",
    quote:
      "I was missing every call after 4pm. Now I get a WhatsApp with the postcode and the job. I just turn up.",
    name: "Daz K.",
    metric: "47 calls · 38 booked in",
  },
  {
    trade: "Plumbing & Heating · Leeds",
    delta: "£72,900",
    deltaSub: "in 90 days",
    quote:
      "The AI sounds better than my old receptionist. I sacked her. The calendar fills itself now.",
    name: "Marek W.",
    metric: "112 calls · 0 missed",
  },
  {
    trade: "Builder · Cardiff",
    delta: "£31,400",
    deltaSub: "recovered after-hours",
    quote:
      "All my mates use offshore call centres. The customers hated it. This actually books the job.",
    name: "Llewellyn P.",
    metric: "After 5pm: 3x the jobs",
  },
];

export function Proof() {
  return (
    <section className="relative bg-black-2 py-16 sm:py-24">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-hazard mb-3">
              ↳ Receipts From Live Sites
            </div>
            <h2 className="font-display uppercase text-bone text-[clamp(2rem,6vw,4rem)] leading-[0.9] tracking-tight max-w-3xl">
              Real tradesmen.
              <br />
              <span className="text-hazard">Real money. </span>
              <span className="text-bone/40">Already in the bank.</span>
            </h2>
          </div>
          <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-bone/60 max-w-xs">
            Names changed. Numbers checked against their own booking records.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((c, i) => (
            <article
              key={c.name}
              className="relative bg-bone text-black border-[3px] border-bone p-6 flex flex-col"
              style={{ boxShadow: "8px 8px 0 0 #ffe600" }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-rust">
                Case #{(i + 1).toString().padStart(2, "0")}
              </div>
              <div className="mt-2 font-display uppercase text-black text-lg">
                {c.trade}
              </div>

              <div className="mt-5 pb-5 border-b-2 border-dashed border-black/20">
                <div className="font-sign font-black text-black text-[clamp(2.4rem,7vw,3.6rem)] leading-none">
                  {c.delta}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/60 mt-1">
                  {c.deltaSub}
                </div>
              </div>

              <p className="mt-5 text-black/85 text-[15px] italic leading-snug grow">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center justify-between gap-2">
                <span className="font-display uppercase text-black text-sm">
                  — {c.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] bg-black text-hazard px-2 py-1">
                  {c.metric}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Testimonial strip */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Quote
            text="Booked four jobs in week one. Two of them were Sunday calls I would've missed completely."
            who="Sam D."
            trade="Electrician · Bristol"
          />
          <Quote
            text="My wife's not answering the phone for me at 9pm anymore. That alone is worth a grand."
            who="Tony R."
            trade="Joiner · Newcastle"
          />
          <Quote
            text="Honestly thought it was bollocks until I called it myself. Couldn't tell it was AI."
            who="Aiden M."
            trade="Tiler · Glasgow"
          />
        </div>
      </div>
    </section>
  );
}

function Quote({ text, who, trade }: { text: string; who: string; trade: string }) {
  return (
    <figure className="bg-black-3 border border-bone/20 p-5">
      <div className="font-display text-hazard text-3xl leading-none">&ldquo;</div>
      <blockquote className="mt-2 text-bone text-[15px] leading-snug">
        {text}
      </blockquote>
      <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/60">
        <span className="text-bone">{who}</span> · {trade}
      </figcaption>
    </figure>
  );
}
