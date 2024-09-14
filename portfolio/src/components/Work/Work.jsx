import './work.css'
import { FaArrowRight } from "react-icons/fa6";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export function Work(){
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    const projects = [
        {
            id: 1,
            category: 'Web',
            imgScr: 'fit.png',
            title: 'Fit',
            link: 'https://gymnfitness.netlify.app',
        },
        {
            id: 2,
            category: 'casual',
            imgScr: 'quizzical.png',
            title: 'Quizzical',
            link: 'https://quizzical54.netlify.app/',
        },
        {
            id: 3,
            category: 'web',
            imgScr: 'orainta.png',
            title: 'ORAINTA',
            link: 'https://orainta.netlify.app/',
        },

        {
            id: 4,
            category: 'casual',
            imgScr: 'note.png',
            title: 'Note',
            link: 'https://steady-malabi-217060.netlify.app/',
        },
    ]

    return (
        <>
        <section class="my-work" id="work">
            <h2 class="section__title section__title--work" data-aos='fade-up'>Projects</h2>

            <div className="categories" data-aos='fade-up' data-aos-duration='2500'>
                <ul>
                    <li>All</li>
                    <li>Web</li>
                    <li>Designs</li>
                    <li>Casual</li>
                </ul>
            </div>

            <div className="portfolio">
                {projects.map((project, index)=>(
                    <a target='_blank' href={project.link} className='portfolio__item' key={index} data-aos='fade-up' data-aos-duration='3000'>
                        <img src={`images/${project.imgScr}`} alt="" />
                        <span>{project.title}</span>
                        <button>
                            see Live
                            <FaArrowRight/>
                        </button>
                    </a>
                ))}
            </div>

            {/* <div className="portfolio">
                <a href="" className='portfolio__item'>
                    <img src="images/portfolio-01.jpg" alt="" class="portfolio__img"/>
                    <span>The Vintage</span>
                    <button>
                        See Live
                        <FaArrowRight className='icon'/>
                    </button>
                </a>

                <a href="" className='portfolio__item'>
                    <img src="images/portfolio-01.jpg" alt="" class="portfolio__img"/>
                    <span>The Vintage</span>
                    <button>
                        See Live
                        <FaArrowRight className='icon'/>
                    </button>
                </a>

                <a href="" className='portfolio__item'>
                    <img src="images/portfolio-01.jpg" alt="" class="portfolio__img"/>
                    <span>The Vintage</span>
                    <button>
                        See Live
                        <FaArrowRight className='icon'/>
                    </button>
                </a>

                <a href="" className='portfolio__item'>
                    <img src="images/portfolio-01.jpg" alt="" class="portfolio__img"/>
                    <span>The Vintage</span>
                    <button>
                        See Live
                        <FaArrowRight className='icon'/>
                    </button>
                </a>
            </div> */}

            {/* <p class="section__subtitle section__subtitle--work">Some of my Work</p>
            
            <div class="portfolio">
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-01.jpg" alt="" class="portfolio__img"/>
                </a>
                
                
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-02.jpg" alt="" class="portfolio__img"/>
                </a>
                
                
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-03.jpg" alt="" class="portfolio__img" />
                </a>
                
                
                <a href="#" class="portfolio__item">
                    <img src="images/portfolio-04.jpg" alt="" class="portfolio__img" />
                </a>
            </div> */}
        </section>
        </>
    )
}

