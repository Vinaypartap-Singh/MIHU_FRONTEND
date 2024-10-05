import ForgotPasswordRequestForm from "@/components/auth/forgotPassword";
import ForgotPasswordOtpForm from "@/components/auth/forgotPasswordUpdate";

export default function ForgotPasswordOtp() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center">
      <div className="max-w-xl rounded-sm w-full m-auto space-y-6">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-center">
            Mihu Website Builder
          </h1>
          <p className="text-center text-gray-400 font-bold">
            Enter Your Email to Send OTP to reset password
          </p>
        </div>
        <ForgotPasswordRequestForm />
      </div>
    </main>
  );
}
