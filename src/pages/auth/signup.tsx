import AuthForm from "@/components/auth/auth-form";
import SignupForm from "@/components/auth/signup-form";

const Signup = () => {
  return (
    <div className="flex items-center max-w-screen justify-center min-h-dvh">
      <div className="w-[400px] relative z-10">
        <AuthForm>
          <SignupForm />
        </AuthForm>
        <span
          className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl -z-10"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
};

export default Signup;
