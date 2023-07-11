import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import Dropdown from "./components/Dropdown";
import Calendar from './components/Calendar';


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
    console.log(radio.value);
    let expectedVal = index+1;
    expect(radio.value).toBe(`${expectedVal}`);
  })

})

// test('renders form headline', () => {
  
//   // render(<ReservationForms/>);
//   // const headingElement = screen.getByText("Choose Your Time:");
//   // expect(headingElement).toBeInTheDocument();
// });
