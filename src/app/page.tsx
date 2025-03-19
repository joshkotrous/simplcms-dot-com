import HeroBanner from "./herobanner";
import { SimplCMSDemo } from "@/components/terminal";
import IntegrationsSection from "@/components/integrationsSection";
import SetupWizardSection from "@/components/setupWizardSection";
export default function Home() {
  return (
    <div className="pb-20 sm:pt-20 lg:pt-0 bg-gradient-to-b from-background to-muted/30">
      <div className="fixed w-screen h-screen rounded-full bg-primary/5 blur-3xl z-0" />
      <div className="fixed w-screen h-screen rounded-full bg-primary/10 blur-3xl z-0" />

      <div className="relative z-10">
        <HeroBanner />
        <div>
          <section className="flex justify-center items-center py-24">
            <SimplCMSDemo />
          </section>
          <IntegrationsSection />
          <SetupWizardSection />
        </div>
      </div>
    </div>
  );
}
