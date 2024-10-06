"use client";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../common/SubmitButton";
import { useFormState } from "react-dom";
import { requestResetPasswordAction } from "@/actions/authAction";
import { initState } from "./loginForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ForgotPasswordRequestForm() {
  const [email, setEmail] = useState<string>("");
  const [state, formAction] = useFormState(
    requestResetPasswordAction,
    initState
  );

  const router = useRouter();

  useEffect(() => {
    if (state.status === 400) {
      toast.error(state.message);
    } else if (state.status === 200) {
      toast.success(state.message);
      localStorage.setItem("email", email);
      router.replace("/forgot-password");
    }
  }, [state]);

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
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="text-red-500 capitalize">{state.error?.email}</span>
      </div>

      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
