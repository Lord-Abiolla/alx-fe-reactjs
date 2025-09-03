import { Link } from "react-router-dom";

function Navbar() {
    const header = {
        backgroundColor: "navy",
        padding: "20px",
        color: "white"
    }

    const nav = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    const links = {
        display: "flex",
        gap: "20px"
    }

    const linkElements = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <header style={header}>
            <nav style={nav}>
                <h1>My-Company</h1>
                <div style={links}>
                    <Link to="/" style={linkElements}>Home</Link>
                    <Link to="about" style={linkElements}>About</Link>
                    <Link to="services" style={linkElements}>Services</Link>
                    <Link to="contact" style={linkElements}>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;