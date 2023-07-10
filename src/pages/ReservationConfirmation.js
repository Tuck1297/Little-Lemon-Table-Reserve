import Header from "../components/Header";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';


function ReservationConfirmation() {
  const navigate = useNavigate();
  const redirectToPage = () => {
    navigate('/reserve-begin')
  }
  return (
    <>
      <Header></Header>
      <Nav></Nav>
       <Main>
        <section className="content-body">
          <div className="btn-container">
            <button className="action-btn">Submit Reservation</button>
          </div>
          <div className="goBackBtn">
            <button onClick={redirectToPage}><div className="custom-arrow"></div><h1>Go Back</h1></button>
          </div>
          <h1 className="headline">Request Summary</h1>
          <section className="info-desc-group">
            <table>
              <tbody>
                <tr>
                  <td>Reserved Time: </td>
                  <td>5/5/2023 at 8:30 PM</td>
                </tr>
                <tr>
                  <td>Group Size: </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Adults: </td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Children: </td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Reservation Occasion: </td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Reservation Notes: </td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Reservation Name: </td>
                  <td>Abel McGregor</td>
                </tr>
                <tr>
                  <td>Reservation Confirmation Number: </td>
                  <td>abc-123456</td>
                </tr>
                <tr>
                  <td>Email Address: </td>
                  <td>abelmcgregor@gmail.com</td>
                </tr>
                <tr>
                  <td>Phone Number: </td>
                  <td>(123)-456-7895</td>
                </tr>
                <tr>
                  <td>Opted in for Email Notifications: </td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>Opted in for Phone Notifications </td>
                  <td>NO</td>
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