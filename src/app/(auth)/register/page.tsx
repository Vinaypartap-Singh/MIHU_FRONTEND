import RegisterForm from "@/components/auth/registerForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center">
      <div className="max-w-xl rounded-sm w-full m-auto space-y-6">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl text-center">
            Mihu Website Builder
          </h1>
          <p className="text-center text-gray-400 font-bold">
            Create New Account
          </p>
        </div>

        <RegisterForm />
      </div>
    </main>
  );
}
