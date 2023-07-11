import LemonLogo from "../assets/images/LittleLemon.png";
function Footer() {
    return (
        <>
            <footer>
                <img src={LemonLogo} alt="Little Lemon Logo"></img>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/reserve-begin">Reserve a Table</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </nav>
                <section>
                    Address:
                    <address>
                        1234 Citrus Street <br />Chicago, IL 60601
                    </address>
                    <br></br>
                    Contact Information:
                    <div>Phone: (123)-456-7891</div>
                    <div>Email: LittleLemon@gmail.com</div>
                </section>
            </footer>
        </>
    );
}

export default Footer;