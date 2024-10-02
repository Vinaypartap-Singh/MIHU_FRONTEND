import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between items-center p-6">
        <div>
          <h5 className="font-bold">MIHU Builder</h5>
        </div>
        <div className="space-x-6">
          <Button asChild variant={"outline"}>
            <Link href={"/login"}>Login</Link>
          </Button>
          <Button asChild>
            <Link href={"/register"}>Register</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
