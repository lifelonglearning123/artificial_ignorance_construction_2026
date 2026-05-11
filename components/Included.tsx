const items = [
  {
    n: "01",
    head: "WE PAY FOR THE LEADS",
    line: "We buy the Google ads. Every penny. You pay nothing for them.",
    body: "We get you to the top of Google for your trade in your postcodes. No setup. No faffing with budgets. No phone calls from a Google rep trying to sell you more stuff. We pay, we run them, you sit back.",
    tag: "We pay the ads bill",
  },
  {
    n: "02",
    head: "WE ANSWER EVERY CALL",
    line: "An AI that picks up in one ring. Day, night, weekend. Sounds human.",
    body: "No 'press 1 for this'. No voicemail. It chats like a real person, finds out what the job is, books them in, and sends it straight to your phone. 5pm Friday? 11pm Sunday? All answered.",
    tag: "Picks up in 1 ring",
  },
  {
    n: "03",
    head: "WE BOOK THE JOBS",
    line: "Real bookings land on your phone with one ping.",
    body: "The address. What the job is. Roughly what they'll spend. When to call. All in one message. You roll up, do the work, send the bill. We do everything before the van turns up.",
    tag: "Straight to your phone",
  },
];

export function Included() {
  return (
    <section className="relative bg-black py-16 sm:py-24">
      <div className="absolute inset-0 blueprint-grid-fine opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-hazard mb-3">
            ↳ Included In Your £1,000
          </div>
          <h2 className="font-display uppercase text-bone text-[clamp(2rem,6vw,4rem)] leading-[0.9] tracking-tight max-w-3xl">
            Three jobs done.
            <br />
            <span className="text-bone/50">None of them by you.</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {items.map((it, i) => (
            <article
              key={it.n}
              className="group grid grid-cols-1 md:grid-cols-12 gap-0 border-[3px] border-bone bg-black-2 overflow-hidden hover:bg-black-3 transition-colors"
            >
              <div className="md:col-span-3 bg-hazard text-black px-6 py-6 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 border-b-[3px] md:border-b-0 md:border-r-[3px] border-bone">
                <span className="font-sign font-black text-[clamp(3rem,7vw,5rem)] leading-none">
                  {it.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/70 md:max-w-[14ch] text-right md:text-left">
                  {it.tag}
                </span>
              </div>

              <div className="md:col-span-9 px-6 py-6 sm:py-8">
                <h3 className="font-display uppercase text-bone text-2xl sm:text-3xl tracking-tight">
                  {it.head}
                </h3>
                <p className="mt-2 text-hazard text-base sm:text-lg font-semibold">
                  {it.line}
                </p>
                <p className="mt-3 text-bone/70 text-[15px] leading-relaxed max-w-2xl">
                  {it.body}
                </p>

                {i === 1 && (
                  <div className="mt-5 inline-flex items-center gap-3 px-4 py-2 bg-black border border-bone/20 font-mono text-[11px] uppercase tracking-[0.16em] text-bone/80">
                    <span className="size-2 rounded-full bg-green beacon" />
                    Google stops dropping you down the list for missed calls
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
