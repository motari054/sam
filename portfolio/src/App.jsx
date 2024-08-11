import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Work } from "./components/Work";

export default function App(){
  return (
    <>
    <Navbar/>
    <Intro/>
    <Services/>
    <About/>
    <Work/>
    <Footer/>
    </>
  )
}