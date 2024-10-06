"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../common/SubmitButton";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { resetPasswordOtpVerifyAction } from "@/actions/authAction";
import { initState } from "./loginForm";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ForgotPasswordUpdateForm() {
  const [state, formAction] = useFormState(
    resetPasswordOtpVerifyAction,
    initState
  );

  const router = useRouter();

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
      localStorage.removeItem("email");
      router.replace("/login");
    }
  }, [state]);

  return (
    <form className="space-y-6" action={formAction}>
      <div className="space-y-2">
        <Label htmlFor="password">Email</Label>
        <Input
          placeholder="Your Email"
          type="email"
          name="email"
          id="email"
          className="py-6"
          readOnly
          value={"developervsandhu@gmail.com"}
        />
        <span className="text-red-500 capitalize">{state.error?.email}</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="otp">OTP</Label>
          <Button asChild variant={"link"}>
            <Link href={"/forgot-password"}>Resend OTP</Link>
          </Button>
        </div>

        <Input
          placeholder="Enter Your OTP"
          type="number"
          name="otp"
          id="otp"
          className="py-6"
        />
        <span className="text-red-500 capitalize">{state.error?.otp}</span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">New Password</Label>
        <Input
          placeholder="New Password"
          name="password"
          type="password"
          id="password"
          className="py-6"
        />
        <span className="text-red-500 capitalize">{state.error?.password}</span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Confirm Password</Label>
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          className="py-6"
        />
        <span className="text-red-500 capitalize">
          {state.error?.confirmPassword}
        </span>
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
