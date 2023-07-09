import LemonLogo from "../assets/images/LittleLemon.png";
function Nav() {
    return (
        <>
            <nav>
                <div className="logo">
                    <a href="/"><img src={LemonLogo} alt="Little Lemon Logo"></img></a>
                </div>
                {/* <div>
                    <button>
                        <svg width={40} height={40} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10H3" />
                            <path d="M21 6H3" />
                            <path d="M21 14H3" />
                            <path d="M21 18H3" />
                        </svg>
                    </button>
                </div> */}
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
                        <button className="action-btn">Reserve Now</button>
                        {/* <a href="/reserve">Reserve Now</a> */}
                    </li>
                    <li>
                        <button className="action-btn">Order Online</button>
                        {/* <a href="/order">Order Online</a> */}
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;