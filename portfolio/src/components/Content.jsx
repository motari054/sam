export function Content(){
    return (
        <>
        {/* Intro */}
        <section className="intro" id="home">
            <h1 className="section--title section--title--intro">
                Hi, I am Sam
            </h1>
            <p className="section--subtitle section--subtitle--intro">Full Stack Dev</p>
            <img src="images/dev-jane-01.jpg" alt="" />
        </section>

        {/* Services */}
        <section className="my-services" id="services">
            <h2 className="section--title section--title--services">What I do</h2>
            <div className="services">
                <h3>Design + Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum quo reprehenderit quas quibusdam reiciendis inventore nemo expedita 
                    repudiandae beatae, deserunt corporis veritatis voluptatem, 
                    aliquam dolor! Repudiandae est delectus eius in!</p>
            </div>
            {/* End of Service */}

            <div className="services">
                <h3>E-Commerce</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum quo reprehenderit quas quibusdam reiciendis inventore nemo expedita 
                    repudiandae beatae, deserunt corporis veritatis voluptatem, 
                    aliquam dolor! Repudiandae est delectus eius in!</p>
            </div>
            {/* End of Service */}

            <div className="services">
                <h3>WordPress</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum quo reprehenderit quas quibusdam reiciendis inventore nemo expedita 
                    repudiandae beatae, deserunt corporis veritatis voluptatem, 
                    aliquam dolor! Repudiandae est delectus eius in!</p>
            </div>
            {/* End of Service */}
            <a href="#work" className="btn">My Work</a>
        </section>

        {/* About */}
        <section className="about-me" id="about">
            <h2 className="section--title section--title--about">Who am I</h2>
            <p className="section--subtitle section--subtitle--about"></p>
            <div className="about--me--body">
                <p></p>
                <p></p>
            </div>
            <img src="images/dev-jane-02.jpg" alt="" />
        </section>

        {/* Work */}
        <section className="my-work" id="work">
            <h2 className="section--title">My Work</h2>
            <p className="section--subtitle"></p>
            <div className="portfolio">
                {/* Portfolio 1 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-01.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 2 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-02.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 3 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-03.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 4 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-04.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 5 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-05.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 6 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-06.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 7 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-07.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 8 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-08.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 9 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-09.jpg" alt="" className="portfolio--img"/>
                </a>

                {/* Portfolio 10 */}
                <a href="#" className="portfolio--item">
                    <img src="images/portfolio-10.jpg" alt="" className="portfolio--img"/>
                </a>
            </div>
        </section>

        {/* Footer */}
        <footer>
            <a href="mailto:samuelmotari054@gmail.com" className="footer--link">samuelmotari054@gmail.com</a>
            <ul className="social--list">
                <li className="social--list--item"><a href="#" className="social--list--link">a</a></li>
                <li className="social--list--item"><a href="#" className="social--list--link">b</a></li>
                <li className="social--list--item"><a href="#" className="social--list--link">c</a></li>
                <li className="social--list--item"><a href="#" className="social--list--link">d</a></li>
            </ul>
        </footer>
        </>
    )
}