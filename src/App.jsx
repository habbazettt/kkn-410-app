import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import MapSection from "./sections/MapSection"

const App = () => {
  return (
    <main className="relative w-full">
      <Navbar />

      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding my-10">
        <About />
      </section>

      <section className="padding my-14">
        <MapSection />
      </section>
    </main>
  )
}

export default App