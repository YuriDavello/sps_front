import './Navbar.css'

function Navbar() {
    
    return(
        <nav className="navbar">
            <div className="logo-block">
                <span className="logo">SPS Consultoria</span>
            </div>
            <div className="logout-block">
                <span>Sair</span>
            </div>
        </nav>
    );
}

export default Navbar;