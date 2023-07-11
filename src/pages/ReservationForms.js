import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { ReservationContext } from "../components/ReservationContext";
import Calendar from "../components/Calendar";
import Dropdown from "../components/Dropdown";
import { fetchAPI, submitAPI } from '../api.js';


import { useNavigate } from 'react-router-dom';
import { useState, useRef, useContext, useEffect } from 'react';


function ReservationForms() {
  const { shareData, updateSharedData } = useContext(ReservationContext);

  const navigate = useNavigate();
  const [hourState, setHourState] = useState(12);
  const [minState, setMinState] = useState(0);
  const [adultState, setAdultState] = useState(2);
  const [childState, setChildState] = useState(0);
  const [calMonthState, setCalMonthState] = useState(31);
  const [ampmState, setAmPmState] = useState(null);
  const [dayState, setDayState] = useState(null);
  const yearDropdown = useRef(null);
  const monthDropdown = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const occasionRef = useRef(null);
  const requestRef = useRef(null);
  const allowCallTextRef = useRef(null);
  const allowEmailRef = useRef(null);
  const amRef = useRef(null);
  const pmRef = useRef(null);

  useEffect(() => {
    initializeTimes()
  })

  function initializeTimes() {
    const today = new Date();
const currentDate = today.toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
const dateObject = new Date(currentDate); // Convert the 'currentDate' string to a Date object
    let result = fetchAPI(dateObject)
    console.log(result)
  }

  useEffect(() => {
    if (Object.keys(shareData).length === 0) return;
    setHourState(shareData.hour);
    setMinState(shareData.min);
    setAdultState(shareData.adults);
    setChildState(shareData.children);
    yearDropdown.current.value = shareData.year;
    monthDropdown.current.value = shareData.month;
    occasionRef.current.value = shareData.occasion;
    firstNameRef.current.value = shareData.firstName;
    lastNameRef.current.value = shareData.lastName;
    phoneRef.current.value = shareData.phoneNum;
    emailRef.current.value = shareData.email;
    requestRef.current.value = shareData.otherRequests;
    allowCallTextRef.current.checked = shareData.allowCallTextMsg;
    allowEmailRef.current.checked = shareData.allowEmail;
    if (shareData.ampm === "AM") {
      amRef.current.checked = true;
      setAmPmState('AM')
    } else {
      pmRef.current.checked = true;
      setAmPmState('PM')
    }
    let radioBtn = document.getElementById(`DayRadio${shareData.day}`);
    setDayState(shareData.day);
    if (radioBtn) {
      radioBtn.checked = 'true';
    }
    if (isLeapYear(shareData.year) && shareData.month === "February") {
      setCalMonthState(29);
    } else if (shareData.month === "February") {
      setCalMonthState(28);
    }
  }, [shareData])

  const authenticateData = (e) => {
    e.preventDefault();

    if ((ampmState === 'AM' && hourState < 11) || (ampmState === 'AM' && hourState === 12)) {
      handleAuthErrorMessage('Sorry, we are not open during this time.');
      return;
    } else if (ampmState === 'PM' && hourState >= 6) {
      if (hourState !== 12) {
        handleAuthErrorMessage('Sorry, we stop taking reservations at 6 PM');
        return;
      }
    }

    if (ampmState === null) {
      handleAuthErrorMessage("Please select if your reservation will be in the morning or afternoon.")
      return;
    }

    if (adultState + childState >= 15) {
      handleAuthErrorMessage('Please call us if your group is larger than 15 people.')
      return;
    }

    if (yearDropdown.current.value === "") {
      handleAuthErrorMessage("Please select a year to continue with your reservation.")
      return;
    }

    if (monthDropdown.current.value === "") {
      handleAuthErrorMessage("Please select a month to continue with your reservation. ")
      return;
    }

    if (dayState === null) {
      handleAuthErrorMessage("Please select a day to continue with your reservation.")
      return;
    }

    if (firstNameRef.current.value === "") {
      handleAuthErrorMessage("Please enter your first name for the reservation.");
      return;
    }

    if (lastNameRef.current.value === "") {
      handleAuthErrorMessage("Please enter your last name for the reservation.");
      return;
    }
    if (phoneRef.current.value === "") {
      handleAuthErrorMessage("Please enter a phone number so we may contact you if there are any updates to your reservation.");
      return;
    } else if (phoneRef.current.value.length !== 10) {
      handleAuthErrorMessage("Please enter a valid phone number. Input only numbers.");
      return;
    }

    if (emailRef.current.value === "") {
      handleAuthErrorMessage("Please enter a email address so we may send you a reservation confirmation.");
      return;
    }

    let reservationObject =
    {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phoneNum: phoneRef.current.value,
      email: emailRef.current.value,
      year: yearDropdown.current.value,
      month: monthDropdown.current.value,
      day: dayState,
      hour: hourState,
      min: minState,
      ampm: ampmState,
      adults: adultState,
      children: childState,
      occasion: occasionRef.current.value,
      otherRequests: requestRef.current.value,
      allowCallTextMsg: allowCallTextRef.current.checked,
      allowEmail: allowEmailRef.current.checked,
      confirmation: `abc-${Math.floor(Math.random() * (10000 - 99999 + 1)) + 99999}`
    }

    updateSharedData(reservationObject)

    // if everything passes then redirect to other page
    redirectToPage();
  }

  const handleAuthErrorMessage = (message) => {
    console.log(message)
  }

  const updateMonthSelectedState = (e) => {
    let month = e.target.value;
    if (month === "January" ||
      month === "March" ||
      month === "May" ||
      month === "July" ||
      month === "August" ||
      month === "October" ||
      month === "December") {
      setCalMonthState(31);
    } else if (month === "April" ||
      month === "June" ||
      month === "September" ||
      month === "November") {
      setCalMonthState(30);
    } else {
      // option is February
      let selectedYear = yearDropdown.current.value;
      if (selectedYear === "") {
        setCalMonthState(28);
        return;
      }
      if (isLeapYear(yearDropdown.current.value)) {
        setCalMonthState(29)
      } else {
        setCalMonthState(28);
      }
    }
  }

  const updateMonthBasedOnYearChange = (e) => {
    let year = e.target.value;
    if (isLeapYear(year)) {
      if (monthDropdown.current.value === "February") {
        setCalMonthState(29);
      }
    } else if (monthDropdown.current.value === "February") {
      setCalMonthState(28);
    }
  }

  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true; // Leap year
        } else {
          return false; // Not a leap year
        }
      } else {
        return true; // Leap year
      }
    } else {
      return false; // Not a leap year
    }
  }

  const redirectToPage = () => {
    navigate('/reserve-confirm')
  }

  const incrementHour = (e) => {
    e.preventDefault();
    let currentHourState = hourState;
    let updatedHourState;
    if (currentHourState === 12) {
      updatedHourState = 1;
    } else {
      updatedHourState = currentHourState + 1;
    }
    setHourState(updatedHourState)
  }
  const decrementHour = (e) => {
    e.preventDefault();
    let currentHourState = hourState;
    let updatedHourState;
    if (currentHourState === 1) {
      updatedHourState = 12;
    } else {
      updatedHourState = currentHourState - 1;
    }
    setHourState(updatedHourState);
  }
  const incrementMin = (e) => {
    e.preventDefault();
    let currentMinState = minState;
    let updatedMinState;
    if (currentMinState === 45) {
      updatedMinState = 0;
    } else {
      updatedMinState = currentMinState + 15;
    }
    setMinState(updatedMinState);
  }
  const decrementMin = (e) => {
    e.preventDefault();
    let currentMinState = minState;
    let updatedMinState;
    if (currentMinState === 0) {
      updatedMinState = 45;
    } else {
      updatedMinState = currentMinState - 15;
    }
    setMinState(updatedMinState);
  }
  const incrementAdult = (e) => {
    e.preventDefault();
    let currentAdultState = adultState;
    let updatedAdultState;
    if (currentAdultState === 20) {
      updatedAdultState = 1;
    } else {
      updatedAdultState = currentAdultState + 1;
    }
    setAdultState(updatedAdultState);
  }
  const decrementAdult = (e) => {
    e.preventDefault();
    let currentAdultState = adultState;
    let updatedAdultState;
    if (currentAdultState === 1) {
      updatedAdultState = 20;
    } else {
      updatedAdultState = currentAdultState - 1;
    }
    setAdultState(updatedAdultState);
  }
  const incrementChild = (e) => {
    e.preventDefault();
    let currentChildState = childState;
    let updatedChildState;
    if (currentChildState === 20) {
      updatedChildState = 0;
    } else {
      updatedChildState = currentChildState + 1;
    }
    setChildState(updatedChildState);
  }
  const decrementChild = (e) => {
    e.preventDefault();
    e.preventDefault();
    let currentChildState = childState;
    let updatedChildState;
    if (currentChildState === 0) {
      updatedChildState = 20;
    } else {
      updatedChildState = currentChildState - 1;
    }
    setChildState(updatedChildState);
  }

  const changeAmPmState = (e) => {
    setAmPmState(e.target.value);
  }

  const changeDayState = (e) => {
    setDayState(e.target.value);
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
              <p className="color-white">Our current hours:</p>
              <p className="color-white">All Week: 11 AM - 7 PM</p>
              <section className="am-pm-btns-group">
                <label className="radio-wrapper-ampm">
                  <input aria-label="AM Selection" type="radio" name="myRadio" id="radioOption1" ref={amRef} value="AM" onChange={changeAmPmState} />
                  <span className="custom-radio-ampm">AM</span>
                </label>
                <label className="radio-wrapper-ampm">
                  <input aria-label="PM Selection" type="radio" name="myRadio" id="radioOption1" ref={pmRef} value="PM" onChange={changeAmPmState} />
                  <span className="custom-radio-ampm">PM</span>
                </label>
              </section>
              <section className="hour-min-selector" aria-describedby="Button group to select hour for reservation.">
                <h2><span className="required">*</span>Select a time:</h2>
                <div className="hour-group">
                  <button aria-label="Increment Hour" onClick={incrementHour} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="hour-element" className="arrow-btn-num">{hourState}</div>
                  <button aria-label="Decrement Hour" onClick={decrementHour} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
                <div className="middle-colon">:</div>
                <div className="minute-group" aria-describedby="Button group to select minute for reservation. Are grouped in 15 minute increments.">
                  <button aria-label="Increment Minutes" onClick={incrementMin} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="minute-element" className="arrow-btn-num">{minState === 0 ? "00" : minState}</div>
                  <button aria-label="Decrement Minutes" onClick={decrementMin} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
              </section>
              <section className="people-group-selector" aria-describedby="Button Group to select how many adults and children are in the reservation group.">
                <h2><span className="required">*</span>Adults:</h2>
                <div className="adult-group">
                  <button aria-label="Increment Adult Count" onClick={incrementAdult} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="adult-element" className="arrow-btn-num">{adultState}</div>
                  <button aria-label="Decrement Adult Count" onClick={decrementAdult} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
                <h2><span className="required">*</span>Children:</h2>
                <div className="child-group">
                  <button aria-label="Increment Child Count" onClick={incrementChild} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.577 7.752-5.755 6.577c-.68.776-.128 1.99.903 1.99h11.51a1.2 1.2 0 0 0 .904-1.99l-5.755-6.576a1.2 1.2 0 0 0-1.807 0v-.001Z" />
                  </svg></button>
                  <div id="children-element" className="arrow-btn-num">{childState}</div>
                  <button aria-label="Decrement Child Count" onClick={decrementChild} className="arrow-btn"><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.577 16.248 5.822 9.669c-.68-.774-.128-1.99.903-1.99h11.51a1.2 1.2 0 0 1 .904 1.992l-5.755 6.576a1.198 1.198 0 0 1-1.807 0Z" />
                  </svg></button>
                </div>
              </section>
            </form>
          </div>
          <div className="column-50">
            <form className="month-year-day-form">
              <section className="dropdown-group">
                <Dropdown ref={monthDropdown} changeFunc={updateMonthSelectedState} defaultValTitle="Month" optionsArr={[
                  "January" , "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}></Dropdown>
                <Dropdown ref={yearDropdown} changeFunc={updateMonthBasedOnYearChange} defaultValTitle="Year" optionsArr={[
                  "2023", "2024", "2025"]}></Dropdown>
              </section>
              <Calendar calDays={calMonthState} changeFunc={changeDayState}></Calendar>
            </form>
          </div>
        </section>
        <section className="personal-info-form">
          <form className="personalInfo">
            <h1 className="headline">Personal Information</h1>
            <div className="text-input-container">
              <section className="name-group">
                <div className="input-group">
                  <span className="required">*</span>
                  <input type="text" name="firstname" placeholder="First Name" ref={firstNameRef}></input>
                </div>
                <div className="input-group">
                  <span className="required">*</span>
                  <input type="text" name="lastname" placeholder="Last Name" ref={lastNameRef}></input>
                </div>
              </section>
              <section className="contact-group">
                <div className="input-group">
                  <span className="required">*</span>
                  <input type="tel" name="telephonenumber" placeholder="Phone Number" ref={phoneRef}></input>
                </div>
                <div className="input-group">
                  <span className="required">*</span>
                  <input type="email" name="email" placeholder="Email" ref={emailRef}></input>
                </div>
              </section>
            </div>
            <section className="occasionDropdown">
              <div className="dropdown">
                <div className="dropdown-content">
                  <select ref={occasionRef} defaultValue="">
                    <option value="" >Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                  </select>
                </div>
              </div>
            </section>
            <section className="textarea">
              <textarea name="specialrequests" placeholder="Special Requests" ref={requestRef}></textarea>
            </section>
            <p>Would you like to receive notifications and reminders about your reservation?</p>
            <section className="notification-options-group">
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input type="checkbox" ref={allowCallTextRef} />
                  <span className="checkmark"><div className="checkbox-box"></div></span>
                  <span className="checkbox-text">SMS/Call Notifications</span>
                </label>
              </div>
              <div className="checkbox-container">
                <label className="custom-checkbox">
                  <input type="checkbox" ref={allowEmailRef} />
                  <span className="checkmark"><div className="checkbox-box"></div></span>
                  <span className="checkbox-text">Email Notifications</span>
                </label>
              </div>
            </section>
            <div className="btn-container">
              <button aria-label="Review Reservation" aria-describedby="Submit Reservation to review page before submitting to restaurant." className="action-btn" onClick={authenticateData}>Review Request</button>
            </div>
          </form>
        </section>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default ReservationForms;