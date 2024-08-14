import './style/navbar.css'
export function Navbar() {
    return (
        <header>
            <div className="logo">
            <h4>&lt;sam&gt;</h4>
                {/* <img src="images/devjane.png" alt="Logo" /> */}
            </div>
            <nav>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                </ul>   
            </nav>
        </header>
    );
}
