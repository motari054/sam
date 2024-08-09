export function Navbar(){
    return (
        <>
        <header>
            <div className="logo">
                <h1>Sam</h1>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav--list">
                    <li className="nav--item"><a href="#home">Home</a></li>
                    <li className="nav--item"><a href="#services">My Services</a></li>
                    <li className="nav--item"><a href="#about">About me</a></li>
                    <li className="nav--item"><a href="#work">My Work</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}