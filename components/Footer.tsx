export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-bone/15">
      <div className="hazard-tape-thin h-2" />
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-bone/70">
        <div>
          <div className="font-display uppercase text-bone text-lg leading-tight">
            Artificial Ignorance
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] mt-2">
            UK Construction 2026 · Stand AI-26
          </div>
        </div>
        <div className="font-mono text-[12px] uppercase tracking-[0.14em] leading-relaxed">
          We pay for the ads · We answer every call · We book the jobs · Or you don&apos;t pay
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] sm:text-right">
          © 2026 Artificial Ignorance Ltd.
          <br />
          Built for tradesmen who&apos;d rather be on the tools.
        </div>
      </div>
    </footer>
  );
}
