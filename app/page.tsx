import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { CallbackPromise } from "@/components/CallbackPromise";
import { MathSection } from "@/components/MathSection";
import { Included } from "@/components/Included";
import { Guarantee } from "@/components/Guarantee";
import { Proof } from "@/components/Proof";
import { FAQ } from "@/components/FAQ";
import { SignupSection } from "@/components/SignupSection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <CallbackPromise />
      <MathSection />
      <Included />
      <Guarantee />
      <Proof />
      <FAQ />
      <SignupSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
