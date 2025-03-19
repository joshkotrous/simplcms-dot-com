import Image from "next/image";
import { Clock } from "lucide-react";

export default function SetupWizardSection() {
  return (
    <section className="py-16 md:py-24 w-full flex justify-center px-6">
      <div className="space-y-12 max-w-5xl">
        <div className="space-y-4 text-center px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Clock className="h-3.5 w-3.5" />
            <span>Quick Setup</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get started in less than 5 minutes
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Our intuitive setup wizard guides you through the entire process,
            making it simple to configure your CMS exactly how you need it.
          </p>
        </div>

        <div className="relative w-full flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30" />
          <div className="relative rounded-xl border bg-background/80 p-2 shadow-xl backdrop-blur-sm">
            <Image
              src="/setupwizard.webp"
              width={1200}
              height={800}
              alt="SimplCMS setup wizard interface"
              className="rounded-lg shadow-md w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
