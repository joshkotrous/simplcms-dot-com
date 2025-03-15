import Image from "next/image";
import HeroBanner from "./herobanner";
import { AWSS3Logo, CloudinaryLogo, MongoDBLogo, VercelLogo } from "./logos";
import { FaGoogle } from "react-icons/fa";
export default function Home() {
  return (
    <div className="pb-20 sm:pt-20 lg:pt-0  bg-gradient-to-b from-background to-muted/30">
      <div className="fixed w-screen h-screen rounded-full bg-primary/5 blur-3xl" />
      <div className="fixed w-screen h-screen rounded-full bg-primary/10 blur-3xl" />
      <div className="space-y-24">
        <HeroBanner />
        <section className="px-4 text-center space-y-8">
          <h2 className="font-bold text-2xl">
            Built in integrations for your favorite providers
          </h2>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 w-fit gap-8 justify-center items-center">
              <div className="flex justify-center">
                <MongoDBLogo />
              </div>
              <div className="flex flex-col items-center gap-2 justify-center">
                <AWSS3Logo />
                AWS S3
              </div>
              <div className="flex justify-center">
                <VercelLogo />
              </div>
              <div className="flex justify-center">
                <CloudinaryLogo />
              </div>
              <div className="flex justify-center col-span-2">
                <FaGoogle className="size-20" />
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <h2 className="font-bold text-2xl text-center px-4">
            Setup in less than 5 minutes with the simplified wizard
          </h2>
          <div className="relative flex items-center justify-center px-6 sm:px-20">
            <div className="absolute inset-0 scale-[0.8] rounded-3xl bg-gradient-to-r from-primary/20 to-primary/10 blur-xl" />
            <div className="relative rounded-xl border bg-background/80 p-2 shadow-lg backdrop-blur-sm">
              <Image
                src="/setupwizard.webp"
                width={800}
                height={600}
                alt="SimplCMS dashboard interface"
                className="rounded-lg shadow-sm"
                priority
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
