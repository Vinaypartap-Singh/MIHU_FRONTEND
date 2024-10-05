import Link from "next/link";
import { Button } from "../ui/button";
import HeroImage from "@/assets/file.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto flex px-5 py-64 items-center justify-center flex-col">
      <div className="text-center lg:w-2/3 w-full space-y-6 container">
        <div>
          <Image
            src={HeroImage}
            alt="Hero Image"
            height={1300}
            width={800}
            className="w-[500px]"
          />
        </div>
        <h1 className="sm:text-6xl text-3xl mb-4 leading-loose font-medium">
          Build Your <span className="text-sky-500">Website Efforlessly </span>
          with Mihu
        </h1>
        <p>
          Customize, create and launch your dream website in minutes, no coding
          required
        </p>
        <div className="space-x-6">
          <Button asChild>
            <Link href={"/login"}>Start Building</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/demo-video-url"}>How to Build?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
