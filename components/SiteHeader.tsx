import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-black/90 backdrop-blur border-b border-bone/15">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Artificial Ignorance"
            width={462}
            height={324}
            className="h-28 w-auto object-contain"
            priority
          />
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-hazard">
            UK Construction · Stand M59
          </div>
        </div>
        <a
          href="#signup"
          className="hidden sm:inline-flex font-display text-[13px] uppercase tracking-wide bg-hazard text-black px-3 py-2 border-2 border-black hover:bg-bone transition-colors"
        >
          Sign Me Up →
        </a>
      </div>
    </header>
  );
}
