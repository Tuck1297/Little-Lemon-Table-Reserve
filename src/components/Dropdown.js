import React from 'react';
import { useState, useEffect } from 'react';

const Dropdown = React.forwardRef(({ changeFunc, defaultValTitle, optionsArr, thisMonth, thisYear, selectedYear }, ref) => {
    const [dropdownItems, setdropdownItems] = useState(optionsArr);

    useEffect(() => {
        if (defaultValTitle === "Year") {
            let arr = [];
            let currentYear = parseInt(thisYear);
            for (let i = 0; i < 3; i++) {
                arr.push(currentYear);
                currentYear++;
            }
            setdropdownItems(arr)
        } else if (defaultValTitle === "Month") {
            setdropdownItems(optionsArr.slice(thisMonth, optionsArr.length))
        }
    }, [thisMonth, thisYear])

    return (
        <div className="dropdown">
            <span className="required">*</span>
            <div className="dropdown-content">
                <select  name={`${defaultValTitle}`} ref={ref} defaultValue="" id={`dropdown${defaultValTitle}`} onChange={changeFunc}>
                    <option value="" disabled>{defaultValTitle}</option>
                    {dropdownItems.map((element, index) => {
                        return (
                            <option key={index} value={element}>
                                {element}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
});

export default Dropdown;