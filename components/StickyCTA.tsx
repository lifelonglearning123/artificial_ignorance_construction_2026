"use client";

import { useEffect, useState } from "react";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 520);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <div className="hazard-tape-thin h-2" />
      <div className="bg-black border-t-2 border-bone/20">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-hazard">
              ↳ A lead a day, guaranteed
            </span>
            <span className="font-display uppercase text-bone text-sm">
              £1,000/mo · Stop any time
            </span>
          </div>
          <a
            href="#signup"
            className="ml-auto cta-primary !w-auto !text-base !py-3 !px-5"
          >
            Sign Me Up Now <span>📞</span>
          </a>
        </div>
      </div>
    </div>
  );
}
