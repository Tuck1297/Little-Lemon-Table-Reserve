import React from 'react';

const Dropdown = React.forwardRef(({changeFunc, defaultValTitle, optionsArr}, ref) => {
    return (
        <div className="dropdown">
            <span className="required">*</span>
            <div className="dropdown-content">
                <select ref={ref} defaultValue="" onChange={changeFunc}>
                    <option value="" disabled>{defaultValTitle}</option>
                    {optionsArr.map((element, index) => {
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