import './navbar.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export function Navbar(){
    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])
    return(
        <nav>
            <input type="checkbox" id="sidebar-active"/>
            <label for="sidebar-active" class="open-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </label>
            <label id="overlay" for="sidebar-active"></label>
            <div class="links-container" data-aos='fade-up'>
            <label for="sidebar-active" class="close-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </label>

            <a class="home-link" href="index.html">
                <div className='logo'>sam</div>
            </a>
            <a href="#home">Home</a> 
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#work">Portfolio</a>
            
            </div>
        </nav>
    )
}