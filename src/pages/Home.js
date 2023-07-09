import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

import featureImg from "../assets/images/restauranfood.jpg";
import greekSalad from "../assets/images/greek-salad.jpg";
import lemonCake from "../assets/images/lemon-dessert.jpg";
import lemonade from "../assets/images/lemonade.jpg";
import profileImg from "../assets/images/profile.png";
import Pierre from "../assets/images/Pierre.jpg";
import Francis from "../assets/images/Francis.jpg";

import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const redirectToPage = () => {
    navigate('/reserve-begin')
  }
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main>
        {/* Hero Section */}
        <section className="hero">
          <section className="hero-column">
            <div className="flex flex-center flex-column hero-desc">
              <h1 className="headline color-yellow hero-headline">Little Lemon</h1>
              <h2 className="lead-text color-white hero-subhead">Chicago</h2>
              <p className="color-white">
                Little Lemon is a charming neighborhood bistro that serves simple
                food and classic cocktails in a lively but casual environment. the restaruant
                features a locally-sourced menu with daily specials.
              </p>
              <button className="action-btn hero-btn" onClick={redirectToPage}>Reserve Now</button>
            </div>
          </section>
          <section className="hero-column">
            <div className="hero-img-container">
              <img src={featureImg} alt="Featured food from Little Lemon"></img>
            </div>
          </section>
        </section>
        <div className="hero-spacer-160"></div>
        <div className="hero-spacer-440"></div>
        {/* Specials Section */}
        <section className="specials">
          <header className="flex flex-wrap">
            <h1 className="headline">This weeks specials!</h1>
            <button className="action-btn">Order Now</button>
          </header>
          <section className="card-gallery">
            <div className="highlights-column">
              <div className="card">
                <div className="img-container">
                  <img src={lemonCake} alt="Lemon Cake"></img>
                </div>
                <section className="card-content-body">
                  <h1>Lemon Cake</h1>
                  <span>$5.99</span>
                  <p>
                    This comes straight from grandma's recipe book,
                    every last ingredient has been sourced and is as
                    authentic as can be imagined.
                  </p>
                  <button className="card-action-btn">Order Now</button>
                </section>
              </div>
            </div>
            <div className="highlights-column">
              <div className="card">
                <div className="img-container">
                  <img src={greekSalad} alt="Greek Salad"></img>
                </div>
                <section className="card-content-body">
                  <h1>Greek Salad</h1>
                  <span>$12.99</span>
                  <p>
                    A Fresh Symphony of Crisp Lettuce, Juicy Tomatoes, Cucumbers,
                    Tangy Feta Cheese, Kalamata Olives and a Zesty Dressing.
                    A Burst of Mediterranean Falvors, Perfectly Balanced for a
                    Refreshing and Healthy Culinary Escape.
                  </p>
                  <button className="card-action-btn">Order Now</button>
                </section>
              </div>
            </div>
            <div className="highlights-column">
              <div className="card">
                <div className="img-container">
                  <img src={lemonade} alt="Lemonade"></img>
                </div>
                <section className="card-content-body">
                  <h1>Lemonade</h1>
                  <span>$4.99</span>
                  <p>
                    Quench your thirst with a glass of Pure Refrishment. Our lemonade
                    is a Citrusy Delight, handcrafted with the Juciest Lemons and just the
                    right amount of sweetness. Sip on the cool, tangy elixir that will brighten
                    your day and leave you craving more.
                  </p>
                  <button className="card-action-btn">Order Now</button>
                </section>
              </div>
            </div>
          </section>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials">
          <h1 className="headline">Testimonials</h1>
          <section className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-card-container">
                <div className="star-group">
                  <span className="star">
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                  </span>
                </div>
                <div className="profile-group">
                  <div className="img-container">
                    <img src={profileImg} alt="Placeholder Profile"></img>
                  </div>
                  <h2 className="profileName">Chad234</h2>
                </div>
                <p className="review-feedback">
                  "The food was great!"
                </p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-container">
                <div className="star-group">
                  <span className="star"><svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                  </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg></span>
                </div>
                <div className="profile-group">
                  <div className="img-container">
                    <img src={profileImg} alt="Placeholder Profile"></img>
                  </div>
                  <h2 className="profileName">Angela84</h2>
                </div>
                <p className="review-feedback">
                  "I LOVED the food and atmosphere."
                </p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-container">
                <div className="star-group">
                  <span className="star">
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                  </span>
                </div>
                <div className="profile-group">
                  <div className="img-container">
                    <img src={profileImg} alt="Placeholder Profile"></img>
                  </div>
                  <h2 className="profileName">America83</h2>
                </div>
                <p className="review-feedback">
                  "The Lemon Cake is just like the one my mother used to make."
                </p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-container">
                <div className="star-group">
                  <span className="star">
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                    <svg width={30} height={30} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.255 20.452c-.464.237-.99-.18-.896-.71l.996-5.677-4.227-4.027c-.395-.377-.19-1.065.34-1.14l5.877-.835 2.62-5.192a.616.616 0 0 1 1.113 0L14.7 8.063l5.878.835c.529.075.734.763.338 1.14l-4.226 4.027.996 5.676c.093.532-.432.948-.896.71l-5.269-2.707-5.267 2.708h.002Z" />
                    </svg>
                  </span>
                </div>
                <div className="profile-group">
                  <div className="img-container">
                    <img src={profileImg} alt="Placeholder Profile"></img>
                  </div>
                  <h2 className="profileName">Hoss34Dale</h2>
                </div>
                <p className="review-feedback">
                  "The salads were really fresh!"
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* About Section */}
        <section className="about">
          <section className="about-desc about-column">
            <h1 className="headline">Little Lemon</h1>
            <h2 className="about-subhead">Chicago</h2>
            <p>Meet Francis and Pierre, the passionate owners of Little Lemon.
              Francis brings culinary expertise with a flair for creating unique
              flavor combinations, white Pierre's warm hospitality ensures every
              guest feels at home. Together, they've crafted a vibrant restaruant
              where zesty Mediterranean dishes and delightful ambiance unite to deliver
              an unforgettable dining experience.
            </p>
          </section>
          <section className="profile-photos about-column">
            <div className="profile-container">
              <img className="francis-photo" src={Francis} alt="Profile of Francis"></img>
              <img className="pierre-photo" src={Pierre} alt="Profile of Pierre"></img>
            </div>
          </section>
        </section>

      </Main>
      <Footer></Footer>
    </>
  );
}

export default Home;