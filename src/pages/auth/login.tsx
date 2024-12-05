import LoginForm from "@/components/auth/auth-form";

const Login = () => {
  return (
    <div className="flex items-center max-w-screen justify-center h-[40vh]">
      <div className="w-[400px] relative z-10">
        <LoginForm />
        <span
          className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl -z-10"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
};

export default Login;
