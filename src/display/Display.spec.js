// Test away!

import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';


// DISPLAYS 'CLOSED' IF THE CLOSED PROP IS TRUE AND 'OPEN' IF OTHERWISE
test("displays 'closed' if the closed prop is true", () => {
    const {getByText} = render(<Display closed={true}/>);
    getByText(/closed/i);
});

test("displays 'open' if the closed prop is false", () => {
    const {getByText} = render(<Display closed={false}/>);
    getByText(/open/i);
});


// DISPLAYS 'LOCKED' IF THE LOCKED PROP IS TRUE AND 'UNLOCKED' IF OTHERWISE
test("displays 'locked' if the locked prop is true", () => {
    const {getByText} = render(<Display locked={true}/>);
    getByText(/locked/i);
});

test("displays 'unlocked' if the locked prop is false", () => {
    const {getByText} = render(<Display locked={false}/>);
    getByText(/unlocked/i);
});


// WHEN LOCKED OR CLOSED USE THE RED-LED CLASS
test('uses red-led class when locked or closed', () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    expect(getByText(/closed/i)).toHaveClass('red-led');
    expect(getByText(/locked/i)).toHaveClass('red-led');
});


// WHEN UNLOCKED OR OPEN USE THE GREEN-LED CLASS
test('uses green-led class when unlocked or open', () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    expect(getByText(/open/i)).toHaveClass('green-led');
    expect(getByText(/unlocked/i)).toHaveClass('green-led');
});