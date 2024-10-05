"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../common/SubmitButton";
import { registerAction } from "@/actions/authAction";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const initState = {
    status: 0,
    message: "",
    error: {},
    data: {},
  };

  const [state, formAction] = useFormState(registerAction, initState);

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
      localStorage.setItem("email", email);
      router.replace("/verify-otp");
    }
    console.log(state);
  }, [state]);

  return (
    <form className="space-y-6" action={formAction}>
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          className="py-6"
        />
        <span className="text-red-500">{state?.error?.name}</span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Your Email</Label>
        <Input
          placeholder="Enter Your Email"
          name="email"
          type="email"
          id="email"
          className="py-6"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="text-red-500">{state?.error?.email}</span>
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
        <span className="text-red-500">{state?.error?.password}</span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          className="py-6"
        />
        <span className="text-red-500">{state?.error?.confirmPassword}</span>
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>

      <div className="flex justify-between">
        <p>Already have an account?</p>
        <Button variant={"link"} asChild>
          <Link href={"/login"} className="text-end font-bold">
            Login Now
          </Link>
        </Button>
      </div>
    </form>
  );
}
