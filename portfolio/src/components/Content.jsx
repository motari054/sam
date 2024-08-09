export function Content(){
    return (
        <>
<body>
        
        
        {/* Intro  */}
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Sam</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Full Stack Dev</p>
            <img src="images/dev-jane-01.jpg" alt="a picture of Jane Smith smiling" class="intro__img" />
        </section>
        
        
        {/* My services */}
        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div class="services">
                <div class="service">
                    <h3>Design + Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div class="service">
                    <h3>E-Commerce</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                
                <div class="service">
                    <h3>WordPress</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            
            <a href="#work" class="btn">My Work</a>
        </section>
        
        
        {/* About */}
        <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Designer & developer based out of NYC</p>
            
            <div class="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <img src="images/dev-jane-02.jpg" alt="Jane leaning against a bus" className="about-me__img"/>
        </section>
        
        {/* Work */}
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">Some of my Work</p>
            
            <div class="portfolio">
                {/* Portfolio item 01 */}
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-01.jpg" alt="" class="portfolio__img"/>
                </a>
                
                {/* Portfolio item 02 */}
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-02.jpg" alt="" class="portfolio__img"/>
                </a>
                
                {/* Portfolio item 03 */}
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-03.jpg" alt="" class="portfolio__img" />
                </a>
                
                {/* Portfolio item 04 */}
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-04.jpg" alt="" class="portfolio__img" />
                </a>
                
                {/* Portfolio item 05 */}
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-05.jpg" alt="" class="portfolio__img" /> 
                </a>
                
                {/* Portfolio item 06 */}
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-06.jpg" alt="" class="portfolio__img" />
                </a>
            </div>
        </section>
    </body>
        </>
    )
}

