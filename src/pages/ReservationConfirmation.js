import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState, useRef } from "react";

import { ReservationContext } from "../components/ReservationContext";


function ReservationConfirmation() {
  const navigate = useNavigate();
  const { shareData} = useContext(ReservationContext);
  const [reservedTime, setReservedTime] = useState(null);
  const [groupSize, setGroupSize] = useState(null);
  const [numAdults, setNumAdults] = useState(null);
  const [numChildren, setNumChildren] = useState(null);
  const [reserveOcca, setReserveOcca] = useState(null);
  const [requests, setRequests] = useState(null);
  const [reserveName, setReserveName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [phoneMsgOpt, setPhoneMsgOpt] = useState(null);
  const [emailMsgOpt, setEmailMsgOpt] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const submitBtnRef = useRef(null);
  const loaderRef = useRef(null);
  const checkRef = useRef(null);


  const redirectToPage = (path) => {
    navigate(path)
  }

  const handleSubmitReservation = () => {
    submitBtnRef.current.style.display = "none";
    loaderRef.current.classList.add('active');
    loaderRef.current.addEventListener('animationend', function() {
      checkRef.current.classList.add('active');
    })

  }

  useEffect(() => {
    if (Object.keys(shareData).length === 0) redirectToPage('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional, adds smooth scrolling effect
    });
    setReservedTime(`${shareData.month}, ${shareData.day} ${shareData.year} at ${shareData.hour}:${shareData.min === 0 ? "00" : shareData.min} ${shareData.ampm}`);
    setGroupSize(shareData.children + shareData.adults);
    setNumAdults(shareData.adults);
    setNumChildren(shareData.children);
    setReserveOcca(shareData.occasion);
    setRequests(shareData.otherRequests);
    setReserveName(`${shareData.firstName} ${shareData.lastName}`);
    setEmail(shareData.email);
    setPhone(shareData.phoneNum);
    shareData.allowCallTextMsg ? setPhoneMsgOpt("Yes") : setPhoneMsgOpt("No");
    shareData.allowEmail ? setEmailMsgOpt("Yes") : setEmailMsgOpt("No");
    setConfirmation(shareData.confirmation);
  }, [shareData]);
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main>
        <section className="content-body">
          <div className="btn-container">
            <button aria-label="Submit Reservation to Little Lemon" ref={submitBtnRef} onClick={handleSubmitReservation} className="action-btn">Submit Reservation</button>
          </div>
          <div className="loader" ref={loaderRef}>
            <div className="check" ref={checkRef}>
              <span className="check-one"></span>
              <span className="check-two"></span>
            </div>
          </div>
          <div className="goBackBtn">
            <button aria-label="Go Back to previous reservation screen." onClick={() => redirectToPage('/reserve-begin')}><div className="custom-arrow"></div><h1>Go Back</h1></button>
          </div>
          <h1 className="headline">Request Summary</h1>
          <section className="info-desc-group">
            <table>
              <tbody>
                <tr>
                  <td>Reserved Time: </td>
                  <td>{reservedTime}</td>
                </tr>
                <tr>
                  <td>Group Size: </td>
                  <td>{groupSize}</td>
                </tr>
                <tr>
                  <td>Adults: </td>
                  <td>{numAdults}</td>
                </tr>
                <tr>
                  <td>Children: </td>
                  <td>{numChildren}</td>
                </tr>
                <tr>
                  <td>Reservation Occasion: </td>
                  <td>{reserveOcca}</td>
                </tr>
                <tr>
                  <td>Reservation Notes: </td>
                  <td>{requests}</td>
                </tr>
                <tr>
                  <td>Reservation Name: </td>
                  <td>{reserveName}</td>
                </tr>
                <tr>
                  <td>Reservation Confirmation Number: </td>
                  <td>{confirmation}</td>
                </tr>
                <tr>
                  <td>Email Address: </td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Phone Number: </td>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <td>Opted in for Email Notifications: </td>
                  <td>{emailMsgOpt}</td>
                </tr>
                <tr>
                  <td>Opted in for Phone Notifications </td>
                  <td>{phoneMsgOpt}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        <section className="parallax"></section>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default ReservationConfirmation;