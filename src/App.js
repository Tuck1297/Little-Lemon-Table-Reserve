import './App.css';
import './Home.css';
import './ReservationForm.css';
import './ReserveConfirmFinished.css';
import './ErrorMsg.css';

import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home.js';
import ReservationForms from './pages/ReservationForms.js';
import ReservationConfirmation from './pages/ReservationConfirmation.js';
import {ReservationContextProvider} from './components/ReservationContext';

function App() {
  return (
    <>
    <ReservationContextProvider>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/reserve-begin" element={<ReservationForms></ReservationForms>}></Route>
        <Route path="/reserve-confirm" element={<ReservationConfirmation></ReservationConfirmation>}></Route>
      </Routes>
      </ReservationContextProvider>
    </>
  );
}

export default App;
