import { fireEvent, render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import Dropdown from "./components/Dropdown";
import Calendar from './components/Calendar';

import ReservationForms from './pages/ReservationForms';
import { ReservationContext } from './components/ReservationContext';
import {BrowserRouter as Router} from "react-router-dom";
import userEvent from '@testing-library/user-event'; // Import userEvent

let container;
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('creates dropdown element correctly', () => {
  const ref = React.createRef();
const emptyFunc = () => {}
const testArr = ["Oranges", "Apples", "Lemons"]
  const {getByRole, getByText} = render(<Dropdown ref={ref} changeFunc={emptyFunc} defaultValTitle="Fruits"
  optionsArr={testArr}></Dropdown>);

  const dropdownElement = getByRole('combobox');
  expect(dropdownElement).toBeInTheDocument();

  testArr.forEach((option) => {
    const optionElement = getByText(option);
    expect(optionElement).toBeInTheDocument();
    expect(optionElement.value).toBe(option);
  });
});

test('render calendar correctly', () => {
  const emptyFunc = () => {};
  const numDays = 20;
  render(<Calendar changeFunc={emptyFunc} calDays={numDays}></Calendar>);

  const radioBtns = screen.getAllByRole('radio');
  expect(radioBtns).toHaveLength(20);
  
  radioBtns.forEach((radio, index) => {
    let expectedVal = index+1;
    expect(radio.value).toBe(`${expectedVal}`);
  })

})

test('data form authentication pass', async () => {


  const mockNavigate = jest.fn();
  const mockUpdateSharedData = jest.fn();
  const mockContextValue = {
    shareData: {},
    updateSharedData: mockUpdateSharedData
  }

  await act(async () => {
    ReactDOM.createRoot(container).render(
    <Router>
    <ReservationContext.Provider value={mockContextValue}>
      <ReservationForms></ReservationForms>
    </ReservationContext.Provider>
    </Router>
  );
})

  const today = new Date();
  const day = today.getDate();
  const year = today.getFullYear();
  const month = today.getMonth();
  // Automatically the day month and year should automatically be set to today's date
  const dropdownElementMonth = document.querySelector("#dropdownMonth");
  const currentValueMonth = dropdownElementMonth.value;
  expect(currentValueMonth).toBe(monthNames[month]);

  const dropdownElementYear = document.querySelector("#dropdownYear");
  const currentValueYear = parseInt(dropdownElementYear.value);
  expect(currentValueYear).toBe(year);

  let radioName = "#DayRadio"+day;
  const calendarRadioElement = document.querySelector(radioName);
  expect(calendarRadioElement.checked).toBe(true);
  // the first two action buttons are in the headbar and the third one is the submit button
  const submitBtn = document.getElementsByClassName('action-btn')[2];
  const errorBox = document.getElementsByClassName('errorBox')[0];
  let errorBoxStyles = window.getComputedStyle(errorBox);
  expect(errorBoxStyles.display).toBe('none');

  act(() => {
    fireEvent.click(submitBtn);
  })
  errorBoxStyles = window.getComputedStyle(errorBox);
  expect(errorBoxStyles.display).toBe("block"); // meaning that error box popped up and form is not submitted
  const closeErrorBox = screen.findByText('X');
  closeErrorBox.then((result) => {
    act(() => {
      fireEvent.click(result);
    })
    errorBoxStyles = window.getComputedStyle(errorBox);
      expect(errorBoxStyles.display).toBe('none');

      const firstNameText = screen.getByPlaceholderText('First Name');
  act(() => {
    fireEvent.change(firstNameText, {target: {value: 'Abel'}})
  })
  expect(firstNameText.value).toBe('Abel');

  const lastNameText = screen.getByPlaceholderText('Last Name');
  act(() => {
    fireEvent.change(lastNameText, {target: {value: 'McGregor'}})
  })
  expect(lastNameText.value).toBe('McGregor');

  const emailText = screen.getByPlaceholderText('Email');
  act(() => {
    fireEvent.change(emailText, {target: {value: 'something@gmail.com'}});
  })
  expect(emailText.value).toBe('something@gmail.com');

  const phoneText = screen.getByPlaceholderText('Phone Number');
  act(() => {
    fireEvent.change(phoneText, {target: {value: '1234567895'}});
  })
  expect(phoneText.value).toBe('1234567895');

  const timeBtnGroup = document.getElementsByName('myTimeRadio');
  
  act(() => {
    fireEvent.click(timeBtnGroup[0]);
  })

  act(() => {
    fireEvent.click(submitBtn);
  })
  errorBoxStyles = window.getComputedStyle(errorBox);
  console.log(errorBox.innerHTML)
  expect(errorBoxStyles.display).toBe("none");

  });


  // act(() => {
  //   userEvent.selectOptions(dropdownElementMonth, 'August');
  // })
  // const currentValue = dropdownElementMonth.value;
  // expect(currentValue).toBe('August');

})
// test('renders form headline', () => {
  
//   // render(<ReservationForms/>);
//   // const headingElement = screen.getByText("Choose Your Time:");
//   // expect(headingElement).toBeInTheDocument();
// });
