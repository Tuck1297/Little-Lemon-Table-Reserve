import LemonLogo from "../assets/images/LittleLemon.png";
function Footer() {
    return (
        <>
            <footer>
                <img src={LemonLogo} alt="Little Lemon Logo"></img>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reserve">Reserve a Table</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <section>
                    Address
                    <address>
                        1234 Citrus Street, Chicago, IL 60601
                    </address>
                </section>
                <section>
                    Contact
                    <div>Phone: (123)-456-7891</div>
                    <div>Email: LittleLemon@gmail.com</div>
                </section>
            </footer>
        </>
    );
}

export default Footer; 