import Navbar from "./components/Navbar.jsx"
import Home from "./Sections/Home.jsx"
import About from "./Sections/About.jsx"
import Service from "./Sections/Service.jsx"
import Contact from "./Sections/Contact.jsx"
import Projects from "./Sections/Projects.jsx"
function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
