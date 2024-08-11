import './style/services.css'
export function Services(){
    return (
        <>
        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div class="services">
                <div class="service">
                    <h3>Web Design</h3>
                    <p>
                        I am a dedicated web designer passionate about crafting 
                        stunning and engaging websites. My approach merges 
                        creativity with usability to ensure each site is both 
                        aesthetically pleasing and user-friendly. I focus on creating 
                        intuitive designs that captivate users and enhance their 
                        experience.
                    </p>
                </div>
                
                <div class="service">
                    <h3>Web Development</h3>
                    <p>
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
                    <h3>UI/UX Design</h3>
                    <p>
                        I specialize in UI/UX design, dedicated to creating intuitive and impactful user interfaces. My process involves deep research and user-centered design principles to craft seamless and enjoyable experiences. By focusing on user needs and behaviors, I ensure that every interaction is both functional and aesthetically pleasing, enhancing overall satisfaction and engagement.
                    </p>
                </div>
            </div>
            
            <a href="#work" class="btn">My Work</a>
        </section>
        </>
    )
}