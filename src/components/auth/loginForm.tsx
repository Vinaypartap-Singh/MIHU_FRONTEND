"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import SubmitButton from "../common/SubmitButton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/authAction";
import { signIn } from "next-auth/react";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const initState = {
    status: 0,
    message: "",
    error: {},
    data: {},
  };

  const [state, formAction] = useFormState(loginAction, initState);
  const router = useRouter();

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.status === 200) {
      console.log(state);
      toast.success(state.message);
      localStorage.setItem("auth-error", JSON.stringify(state));
      localStorage.setItem("data", JSON.stringify(state.data));

      // Sign in with NextAuth
      signIn("credentials", {
        email: state.data.email,
        password: state.data.password,
        redirect: false,
      }).then((result) => {
        if (result?.error) {
          toast.error(result.error); // Handle sign-in error
        } else {
          router.push("/"); // Redirect on successful sign-in
        }
      });
    }
  }, [state, router]);

  console.log(state);

  return (
    <form className="space-y-6" action={formAction}>
      <div className="space-y-2">
        <Label htmlFor="email">Your Email</Label>
        <Input
          placeholder="Enter Your Email"
          name="email"
          type="email"
          id="email"
          value={email} // Control input value
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          className="py-6"
        />
        <span className="text-red-500 capitalize">{state.error?.email}</span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          placeholder="Enter Your Password"
          type="password"
          name="password"
          id="password"
          value={password} // Control input value
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          className="py-6"
        />
        <span className="text-red-500 capitalize">{state.error?.password}</span>
      </div>

      <div className="flex justify-end">
        <Button variant={"link"} asChild>
          <Link href={"/forgot-password"} className="text-end font-bold">
            Forgot Password?
          </Link>
        </Button>
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>

      <div className="flex justify-between">
        <p>Don't have an account?</p>
        <Button variant={"link"} asChild>
          <Link href={"/register"} className="text-end font-bold">
            Register Now
          </Link>
        </Button>
      </div>
    </form>
  );
}
