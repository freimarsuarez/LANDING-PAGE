import { Headers, Hero, Features, MoreInformation, Testimonials } from "./components"

function App() {

  return (
    <main className=" w-93.75 m-auto">
      <section className="bg-Navy-850 p-6 h-105 relative">
        <Headers />
        <img
          src="/public/images/illustration-intro.png"
          alt="intro illustration"
          className=" relative z-10 mt-8"
        />
        <img
          src="/public/images/bg-curvy-mobile.svg"
          alt="curvy mobile"
          className="absolute bottom-0 left-0 "
        />
      </section>
      <section className="bg-Navy-900 p-6">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>
    </main>
  )
}

export default App
