import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch } from "lucide-react";
import Image from "next/image";
import GithubButton from "./githubButton";
import Link from "next/link";

const deployToVercelUrl =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjoshkotrous%2FsimplCMS%2Ftree%2Fmain&project-name=simplcms&repository-name=simplcms";

export default function HeroBanner() {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Content Management Simplified
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Manage content with{" "}
                <span className="text-primary">simplicity</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                SimplCMS gives you the power to create, edit, and publish
                content without the complexity. Built for creators, designed for
                speed.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={deployToVercelUrl}>
                <Button size="lg" className="group w-full sm:w-fit">
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                  >
                    <path d="M8 1L16 15H0L8 1Z" fill="currentColor"></path>
                  </svg>
                  Deploy on Vercel
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Button size="lg" variant="outline">
                View our Docs
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <GitBranch className="mr-1 h-4 w-4" />
                100% Open source
              </div>
              <GithubButton />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 scale-[0.8] rounded-3xl bg-gradient-to-r from-primary/20 to-primary/10 blur-xl" />
            <div className="relative rounded-xl border bg-background/80 p-2 shadow-lg backdrop-blur-sm">
              <Image
                src="/simplcmsnewpost.webp"
                width={800}
                height={600}
                alt="SimplCMS dashboard interface"
                className="rounded-lg shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
