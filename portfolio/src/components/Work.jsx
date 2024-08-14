import './style/work.css'
export function Work(){
    return (
        <>
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">Projects</h2>
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
            </div>
        </section>
        </>
    )
}