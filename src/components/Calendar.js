function Calendar({changeFunc, calDays}) {
    return (
        <section className="interactive-day-selector">
        <div className="calendar">
          <div className="radio-group">
            {Array.from({ length: calDays }, (_, index) => {
              return (
                <label aria-label={`Button Selection for Day Number ${index+1}`} key={index} className="radio-wrapper">
                  <input type="radio" name="myRadio" id={`DayRadio${index+1}`} onChange={changeFunc} value={index + 1} />
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