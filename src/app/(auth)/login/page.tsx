import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center">
      <div className="max-w-xl rounded-sm w-full m-auto space-y-6">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-center">
            Mihu Website Builder
          </h1>
          <p className="text-center text-gray-400 font-bold">
            Login To Continue
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Your Email</Label>
          <Input
            placeholder="Enter Your Email"
            name="email"
            type="email"
            id="email"
            className="py-6"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            placeholder="Enter Your Password"
            type="password"
            name="password"
            id="password"
            className="py-6"
          />
        </div>

        <div className="flex justify-end">
          <Button variant={"link"} asChild>
            <Link href={"/login"} className="text-end font-bold">
              Forgot Password ?
            </Link>
          </Button>
        </div>

        <div className="flex justify-end">
          <Button className="w-full" asChild>
            <Link href={"/forgot-password"} className="text-end font-bold">
              Register Now
            </Link>
          </Button>
        </div>

        <div className="flex justify-between">
          <p>Don't have an account?</p>
          <Button variant={"link"} asChild>
            <Link href={"/register"} className="text-end font-bold">
              Register Now
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
