type Props = {
  text?: string;
  speed?: "normal" | "slow";
  height?: string;
};

export function HazardTape({ text, speed = "normal", height = "h-9" }: Props) {
  if (!text) {
    return (
      <div className={`hazard-tape w-full ${height}`} aria-hidden />
    );
  }
  const items = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div
      className={`relative w-full overflow-hidden bg-hazard ${height} border-y-2 border-black`}
      aria-hidden
    >
      <div
        className={`flex w-max whitespace-nowrap ${speed === "slow" ? "tape-scroll-slow" : "tape-scroll"}`}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {items.map((i) => (
              <span
                key={i}
                className="font-display text-black uppercase tracking-tight px-6 text-[15px] shrink-0"
              >
                {text}
                <span className="px-3 text-black/60">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
