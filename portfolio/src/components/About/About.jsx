import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FaCss3, FaDocker, FaPaperPlane, FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";


// Icons
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";   

export function About(){
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (
        <>
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about" data-aos='fade-up'>Who I am</h2>
            <p class="section__subtitle section__subtitle--about" data-aos='fade-right' data-aos-duration='2500'>Full Stack Web Developer based in Nairobi</p>
            
            <div class="about-me__body">
                <p data-aos='fade-up'>
                I am a passionate professional with a diverse background in web design, development, and UI/UX design. I specialize in front-end development using React.js and SCSS, and back-end development with Django, REST Framework, and SQL. For design work, I use Figma. I'm open to collaborative projects and freelance opportunities.
                </p>

                <div className="tech-stack">
                    <h4 data-aos='fade-up'>Languages, Frameworks and Tools</h4>
                    <ul data-aos='fade-up'>
                        <li><FaReact className='icon'/></li>
                        <li> <IoLogoJavascript className='icon'/> </li>
                        <li> <FaPython className='icon'/> </li>
                        <li> <SiDjango className='icon'/> </li>
                        <li> <FaCss3 className='icon'/> </li>
                        <li><SiRedux className='icon'/></li>
                        <li><FaDocker className='icon'/> </li>
                        
                    </ul>
                </div>

                <button data-aos='fade-up'>
                    <a href="#contact">
                        Hire me
                        <FaPaperPlane className='icon' />
                    </a>
                </button>

            </div>

            <img src="images/image-2.jpg" alt='sam' className="about-me__img" data-aos='fade-left' data-aos-duration='2500' />
        </section>
        </>
    )
}