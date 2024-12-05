import Hero from "@/components/landing/hero"
import Main from "@/components/landing/main"

const Landing = () => {
  return (
    <div className="flex flex-col max-w-screen min-h-dvh">
      <Hero/>
      <Main/>
    </div>
  )
}

export default Landing
