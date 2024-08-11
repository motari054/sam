import './style/about.css'
export function About(){
    return (
        <>
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Full Stack Web Developer based in Nairobi</p>
            
            <div class="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <img src="images/image-2.jpg" alt="Jane leaning against a bus" className="about-me__img"/>
        </section>
        </>
    )
}