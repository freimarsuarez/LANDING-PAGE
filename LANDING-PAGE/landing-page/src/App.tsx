import { Headers, Hero, Features, MoreInformation, Testimonials, Form, Footer } from "./components"

function App() {
  return (
    <main className="m-auto">
      <section className="bg-gray-400 p-6 h-105 relative">
        <Headers />
        <img
          src="/public/images/illustration-intro.png"
          alt="intro illustration"
          className=" relative z-10 mt-8 border border-white"
        />
        <img
          src="/public/images/bg-curvy-mobile.svg"
          alt="curvy mobile"
          className="absolute bottom-0 left-0 "
        />
      </section>
      <section className="bg-Navy-900 p-6 pb-75">
        <Hero />
        <Features />
        <MoreInformation />
        <Testimonials />
      </section>

      <section className="bg-Navy-950 relative ">
        <Form />
        <Footer />
      </section>
    </main>
  )
}

export default App
