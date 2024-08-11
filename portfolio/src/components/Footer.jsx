import './style/footer.css'
export function Footer(){
    return (
        <>
        <footer className="footer">
            <a href="mailto:samuelmotari054@gmail.com" class="footer__link">samuelmotari054@gmail.com</a>
            <ul class="social-list">     
                <li class="social-list__item">
                    <a class="social-list__link" href="https://x.com/sam_motari" target='_blank'>
                        <i class="fab fa-twitter"></i>
                    </a></li>

                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/motari054" target='_blank'>
                        <i class="fab fa-github"></i>
                    </a>
                </li>

                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/samuel-motari-13182922a" target='_blank'>
                    <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
        </footer>
        </>
    )
}