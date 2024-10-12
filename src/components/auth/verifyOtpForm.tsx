"use client";

import { useFormState } from "react-dom";
import SubmitButton from "../common/SubmitButton";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { verifyOTP } from "@/actions/authAction";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export default function VerifyOtpForm() {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  const initState = {
    status: 0,
    message: "",
    error: {},
    data: {},
  };

  const [state, formAction] = useFormState(verifyOTP, initState);

  useEffect(() => {
    setEmail(localStorage.getItem("email") as string);
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
      localStorage?.removeItem("email");
      router.replace("/login");
    }
    console.log(state);
  }, [state]);

  return (
    <form className="space-y-6" action={formAction}>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          id="email"
          className="py-6"
          value={email}
          readOnly
        />
        {/* <span className="text-red-500">{state?.error?.name}</span> */}
      </div>

      <div className="space-y-2">
        <Label htmlFor="otp">OTP</Label>
        <Input
          placeholder="123098"
          name="otp"
          type="number"
          id="otp"
          className="py-6"
        />
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>

      <div className="flex justify-between">
        <Button variant={"link"} asChild>
          <Link href={"/login"} className="text-end font-bold">
            OTP Expired ? Request New OTP
          </Link>
        </Button>
      </div>
    </form>
  );
}
