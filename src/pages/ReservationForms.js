import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

import { useNavigate } from 'react-router-dom';


function ReservationForms() {
  const navigate = useNavigate();
  const redirectToPage = () => {
    navigate('/reserve-confirm')
  }
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main>
        <section className="timeAndPeopleNumForms">
          <div className="column-50">
            <form className="hour-min-numPeople-forms">
              <h1 className="headline">Choose Your Time:</h1>
              <section className="am-pm-btns-group">
                {/* <button className="action-btn">AM</button>
                <button className="action-btn">PM</button> */}
                <label className="radio-wrapper-amfm">
                  <input type="radio" name="myRadio" id="radioOption1" />
                  <span className="custom-radio-amfm">AM</span>
                </label>
                <label className="radio-wrapper-amfm">
                  <input type="radio" name="myRadio" id="radioOption1" />
                  <span className="custom-radio-amfm">FM</span>
                </label>
              </section>
              <section className="hour-min-selector">
                <h2>Select a time:</h2>
                <div className="hour-group">
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="hour-element" className="arrow-btn-num">0</div>
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
                <div className="middle-colon">:</div>
                <div className="minute-group">
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="minute-element" className="arrow-btn-num">0</div>
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
              </section>
              <section className="people-group-selector">
                <h2>Adults:</h2>
                <div className="adult-group">
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="adult-element" className="arrow-btn-num">0</div>
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
                <h2>Children:</h2>
                <div className="child-group">
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="children-element" className="arrow-btn-num">0</div>
                  <button className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
              </section>
            </form>
          </div>
          <div className="column-50">
            <form className="month-year-day-form">
              <section className="dropdown-group">
                <div className="dropdown">
                  <div className="dropdown-content">
                    <select>
                      <option value="" disabled selected>Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                </div>
                <div className="dropdown">
                  <div className="dropdown-content">
                    <select>
                      <option value="" disabled selected>Year</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>
                </div>
              </section>
              <section className="interactive-day-selector">
                <div className="calendar">
                  <div className="radio-group">
                    {Array.from({ length: 31 }, (_, index) => {
                      return (
                        <label key={index} className="radio-wrapper">
                          <input type="radio" name="myRadio" id="radioOption1" />
                          <span className="custom-radio">{index + 1}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </section>
            </form>
          </div>
        </section>
        <section className="personal-info-form">
          <form className="personalInfo">
            <h1 className="headline">Personal Information</h1>
            <div className="text-input-container">
              <section className="name-group">
                <input type="text" name="firstname" placeholder="First Name"></input>
                <input type="text" name="lastname" placeholder="Last Name"></input>
              </section>
              <section className="contact-group">
                <input type="tel" name="telephonenumber" placeholder="Phone Number"></input>
                <input type="email" name="email" placeholder="Email"></input>
              </section>
            </div>
            <section className="occasionDropdown">
              <div className="dropdown">
                <div className="dropdown-content">
                  <select>
                    <option value="" selected>Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                  </select>
                </div>
              </div>
            </section>
            <section className="textarea">
              <textarea name="specialrequests" placeholder="Special Requests"></textarea>
            </section>
            <p>Would you like to receive notifications and reminders about your reservation?</p>
            <section className="notification-options-group">
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"><div className="checkbox-box"></div></span>
                  <span className="checkbox-text">SMS/Call Notifications</span>
                </label>
              </div>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input type="checkbox" />
                  <span className="checkmark"><div className="checkbox-box"></div></span>
                  <span className="checkbox-text">Email Notifications</span>
                </label>
              </div>

            </section>
            <div className="btn-container">
              <button className="action-btn" onClick={redirectToPage}>Review Request</button>
            </div>
          </form>
        </section>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default ReservationForms;