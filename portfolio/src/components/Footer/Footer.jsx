import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './footer.css'
export function Footer(){
    const form = useRef()
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_zqhl2mw', 'template_yz7iefv', form.current, {
            publicKey: 'lyv3_DH--bKtJSYwJ',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
        <footer className="footer">
            <div className="contact-me">
                <span>Get in Touch</span>
                <form action="" ref={form} onSubmit={sendEmail} id='contact'>
                    <div className="input-field">
                        <input type="text" name="user_name" id="name" required spellCheck='false' />
                        <label htmlFor="name">Name</label>
                    </div>

                    <div className="input-field">
                        <input type="email" name="user_email" id="email" required spellCheck='false' />
                        <label htmlFor="email">Your email</label>
                    </div>

                    <div className="text-field">
                        <textarea name="message" id="message" />
                        <label htmlFor="message">Your Message</label>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
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