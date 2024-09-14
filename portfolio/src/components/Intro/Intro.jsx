import './intro.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export function Intro(){
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <>
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro" data-aos='fade-up'>
                Hi, I am <strong data-aos='fade-up' data-aos-duration='2500'>Sam</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro" data-aos='fade-right'>Full Stack Dev</p>
            <img src="images/image-1.jpg" alt="sam" className="intro__img" data-aos='fade-up' />
        </section>
        </>
    )
}