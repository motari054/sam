import './services.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export function Services(){
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    return (
        <>
        <section class="my-services" id="services">
            <h2 class="section__title section__title--services" data-aos='fade-up'>What I do</h2>
            <div class="services">
                <div class="service">
                    <h3 data-aos='fade-up'>Web Design</h3>
                    <p data-aos='fade-up'>
                        I am a dedicated web designer passionate about crafting 
                        stunning and engaging websites. My approach merges 
                        creativity with usability to ensure each site is both 
                        aesthetically pleasing and user-friendly. I focus on creating 
                        intuitive designs that captivate users and enhance their 
                        experience.
                    </p>
                </div>
                
                <div class="service">
                    <h3 data-aos='fade-up'>Web Development</h3>
                    <p data-aos='fade-up'>
                        As a skilled web developer, I build robust and efficient 
                        websites that function seamlessly across all platforms. 
                        My expertise lies in translating design concepts into 
                        dynamic, responsive web solutions using the latest 
                        technologies and best practices. I prioritize performance 
                        and reliability to deliver high-quality, scalable web 
                        applications.
                    </p>
                </div>
                
                <div class="service">
                    <h3 data-aos='fade-up'>UI/UX Design</h3>
                    <p data-aos='fade-up'>
                        I specialize in UI/UX design, dedicated to creating intuitive and impactful user interfaces. My process involves deep research and user-centered design principles to craft seamless and enjoyable experiences. By focusing on user needs and behaviors, I ensure that every interaction is both functional and aesthetically pleasing, enhancing overall satisfaction and engagement.
                    </p>
                </div>
            </div>
            
            <a href="#work" class="btn" data-aos='fade-up'>My Work</a>
        </section>
        </>
    )
}