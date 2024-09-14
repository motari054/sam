import { About } from './components/About/About';
import { Footer } from "./components/Footer/Footer";
import { Intro } from './components/Intro/Intro'
import { Navbar } from './components/Navbar/Navbar';
import { Services } from "./components/Services/Services";
import { Work } from "./components/Work/Work";

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