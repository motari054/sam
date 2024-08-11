import './style/intro.css'
export function Intro(){
    return(
        <>
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Sam</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Full Stack Dev</p>
            <img src="images/image-1.jpg" alt="a picture of Jane Smith smiling" class="intro__img" />
        </section>
        </>
    )
}