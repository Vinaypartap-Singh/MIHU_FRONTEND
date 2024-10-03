import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import authOptions from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session;
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

      {/* @ts-ignore */}
      <p>{JSON.stringify(user?.user?.token)}</p>
    </main>
  );
}
