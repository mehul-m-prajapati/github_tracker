import Hero from "@/components/landing/hero"
import Main from "@/components/landing/main"

const Landing = () => {
  return (
    <div className="flex flex-col max-w-screen min-h-dvh">
      <Hero/>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      <Main/>
      
    </div>
  )
}

export default Landing
