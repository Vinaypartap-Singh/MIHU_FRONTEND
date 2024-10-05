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

export const initState = {
  status: 0,
  message: "",
  error: {},
  data: {},
};

export default function LoginForm() {
  const [state, formAction] = useFormState(loginAction, initState);
  const router = useRouter();

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);

      // Sign in with NextAuth
      signIn("credentials", {
        email: state.data.email,
        password: state.data.password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
    }
  }, [state, router]);

  return (
    <form className="space-y-6" action={formAction}>
      <div className="space-y-2">
        <Label htmlFor="email">Your Email</Label>
        <Input
          placeholder="Enter Your Email"
          name="email"
          type="email"
          id="email"
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
