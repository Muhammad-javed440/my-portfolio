import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Skill from "./components/Skill";

export default function Home() {
  return (
  <>
<div>
  <Navbar/>
  <Hero/>
  <Projects/>
  <About/>
  <Skill/>
  <Contact/>
  <Footer/>
  
</div>

</>
)
}   