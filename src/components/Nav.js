import LemonLogo from "../assets/images/LittleLemon.png";
import { useNavigate } from "react-router-dom";
function Nav() {
    const navigate = useNavigate();
    const redirectToPage = () => {
      navigate('/reserve-begin')
    }
    return (
        <>
            <nav>
                <div className="logo">
                    <a href="/"><img src={LemonLogo} alt="Little Lemon Logo"></img></a>
                </div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <button className="action-btn" onClick={redirectToPage}>Reserve Now</button>
                    </li>
                    <li>
                        <button className="action-btn">Order Online</button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;