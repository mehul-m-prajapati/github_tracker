import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh pt-40 gap-4 px-4">
      <h1 className="sm:text-5xl text-3xl font-bold md:text-5xl text-center relative ">
        Stay Ahead with Git<span className="text-sky-500">Monitor</span> <br />{" "}
        Your Ultimate GitHub Tracking Companion
        <span
          className="absolute inset-0 animate-glow bg-gradient-to-r from-blue-500/60 to-pink-500/60 blur-2xl"
          aria-hidden="true"
        ></span>
      </h1>
      <p className="sm:text-2xl text-xl text-center dark:text-slate-500 text-slate-700 max-w-[900px]">
        Track repositories, monitor contributions, and analyze your projects—all
        in one place.
      </p>
      <Button
        variant={"outline"}
        className="bg-sky-700 hover:bg-sky-600 my-4 text-white hover:text-white"
      >
        <Link to="/auth/signup">Get Started for Free</Link>
      </Button>
      <div className="flex items-center justify-center relative md:pb-40 pb-12">
        <img
          src="/hero.png"
          alt="GitMonitor"
          className="w-full h-auto max-w-[800px] rounded-lg shadow-md border shadow-slate-500 invert dark:invert-0"
        />
        <img
          src="/hero2.png"
          alt="GitMonitor-Mobile"
          className="w-[250px] h-[500px] rounded-xl shadow-md absolute top-0 -right-40 mt-16 shadow-slate-700 max-xl:hidden invert dark:invert-0"
        />
      </div>
    </div>
  );
};

export default Hero;
