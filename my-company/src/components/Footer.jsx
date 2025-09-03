function Footer() {

    const footer = {
        backgroundColor: "navy",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        position: "fixed",
        padding: "15px",
        fontSize: "small",
        bottom: 0,
        left: 0,
        width: "100%"
    }
    return (
        <footer style={footer}>
            <p>All rights reserved @2025</p>
        </footer>
    )
}

export default Footer;