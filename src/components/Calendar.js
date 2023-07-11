import {useEffect} from 'react';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function Calendar({changeFunc, calDays, thisDay, thisMonth, thisYear}) {
// Was working on disabling days on custom calendar based on being in current month or not...
// function determineDisabled(index) {
//   let monthDropdown = document.getElementById("dropdownMonth");
//   if (!monthDropdown) return;
//   let yearDropdown = document.getElementById("dropdownYear");
//   if (!yearDropdown) return;
//   console.log(thisMonth, thisDay, thisYear, monthDropdown.value, yearDropdown.value, index)
//   if (yearDropdown.value == '') {
//     yearDropdown.value = '2023';
//   }
//   if ((parseInt(yearDropdown.value) === thisYear) && (monthNames.indexOf(monthDropdown.value) === thisMonth)) {
//     return (index+1) < parseInt(thisDay)
//   }
//   return false;
// }
    return (
        <section className="interactive-day-selector">
        <div className="calendar">
          <div className="radio-group">
            {Array.from({ length: calDays }, (_, index) => {
              return (
                <label aria-label={`Button Selection for Day Number ${index+1}`} key={index} className="radio-wrapper">
                  <input type="radio" name="myRadio"
                    id={`DayRadio${index+1}`}
                    onChange={changeFunc}
                    value={index + 1}
                    // disabled={determineDisabled(index)}
                />
                  <span className="custom-radio">{index + 1}</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>
    );
}

export default Calendar;