import { fetchAPI } from '../api.js';
import { useEffect, useState, useRef } from 'react';
function ApiTimeFetch({ date, updateTimeState}) {
    const [dataState, setDataState] = useState([]);

    useEffect(() => {
        setDataState(fetchAPI(new Date(date)));
    }, [date])

    return (
        <>
            <section>
            <div className="radio-group-time">
                {dataState.map((element, index) => {
                   return (
                        <label aria-label={`Button Selection for Time ${element}`} key={index} className="radio-wrapper-time">
                            <input type="radio" name="myTimeRadio" id={`TimeRadio${element}`} onChange={updateTimeState} value={element} />
                            <span className="custom-radio-time">{convertToStandardTime(element)}</span>
                        </label>
                    );
                })}
                </div>
            </section>

        </>
    );
}
export default ApiTimeFetch;

function convertToStandardTime(militaryTime) {
    let hour = parseInt(militaryTime.substring(0, 2));
    let minute = militaryTime.substring(3, 5);
    let period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${period}`;
  }