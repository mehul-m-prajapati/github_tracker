import { features, steps } from "@/lib/data";
import { Card } from "../ui/card";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-dvh gap-4 px-4 md:pt-24 max-w-[1000px] mx-auto">
      <h1 className="sm:text-5xl text-3xl font-bold md:text-5xl text-center">
        Why Choose Git<span className="text-sky-500">Monitor</span>?
      </h1>
      <p className="sm:text-2xl text-xl text-center dark:text-slate-500 text-slate-700 max-w-[900px]">
        GitHub is where innovation happens, and Git
        <span className="text-sky-500">Monitor</span> ensures you never miss a
        beat. From monitoring your favorite repositories to gaining valuable
        insights into contributions, Git
        <span className="text-sky-500">Monitor</span> is your go-to solution for
        everything GitHub.
      </p>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="dark:bg-slate-900/50 bg-slate-200 border-slate-800 shadow-lg hover:shadow-slate-800 transition-all duration-500 dark:shadow-slate-900 shadow-slate-400 hover:scale-105"
              >
                <div className="p-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2 grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center dark:bg-slate-900/50 py-5 px-2 text-wrap rounded-lg shadow-lg hover:scale-105 hover:shadow-slate-800 transition-all duration-500 border"
              >
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/45 dark:bg-blue-500/10 text-blue-500">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="dark:text-slate-400 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
