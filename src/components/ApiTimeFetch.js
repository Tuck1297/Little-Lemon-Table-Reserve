import { fetchAPI } from '../api.js';
import { useEffect, useState, useRef } from 'react';
function ApiTimeFetch({ date, updateTimeState }) {
    const [dataState, setDataState] = useState([]);

    useEffect(() => {
        console.log(date)
        setDataState(fetchAPI(new Date(date)));
    }, [date])

    return (
        <>
            <section>
            <div className="radio-group-time">
                {dataState.map((element, index) => {
                    // <button key={index} className="timeBtn" value={element} onClick={updateTimeState}>{element}</button>
                   return (
                        <label aria-label={`Button Selection for Time ${element}`} key={index} className="radio-wrapper-time">
                            <input type="radio" name="myTimeRadio" id={`TimeRadio${element}`} onChange={updateTimeState} value={element} />
                            <span className="custom-radio-time">{element}</span>
                        </label>
                    );
                })}
                </div>
            </section>

        </>
    );
}
export default ApiTimeFetch;

// function initializeTimes() {
    // const today = new Date();
    // const currentDate = today.toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    // const dateObject = new Date(currentDate); // Convert the 'currentDate' string to a Date object
    // let result = fetchAPI(dateObject)
    // console.log(result)
//   }