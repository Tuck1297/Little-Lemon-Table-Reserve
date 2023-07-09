import LemonLogo from "../assets/images/LittleLemon.png";
function Nav() {
    return (
        <>
            <nav>
                <a href="/"><img src={LemonLogo} alt="Little Lemon Logo"></img></a>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/reserve">Reserve Now</a>
                    </li>
                    <li>
                        <a href="/order">Order Online</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;