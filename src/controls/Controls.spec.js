// Test away!

import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';


// PROVIDE BUTTONS TO TOGGLE THE CLOSED AND LOCKED STATES
test("provides buttons to toggle", () => {
    const {getByTestId} = render(<Controls />);
    getByTestId(/buttonlocked/i);
    getByTestId(/buttonclosed/i);
});


//  BUTTONS' TEXT CHANGES TO REFLECT THE STATE THE DOOR WILL BE IN IF CLICKED
test("Locked toggle button text changes to 'unlock' when clicked", () => {
    const { getByText } = render(<Controls locked={true} />);
    getByText(/unlock gate/i);
});

test("Locked toggle button text changes to 'lock' when clicked", () => {
    const { getByText } = render(<Controls locked={false} />);
    getByText(/lock gate/i);
});

test("Closed toggle button text changes to 'open' when clicked", () => {
    const { getByText } = render(<Controls closed={true} />);
    getByText(/open gate/i);
});

test("Closed toggle button text changes to 'close' when clicked", () => {
    const { getByText } = render(<Controls closed={false} />);
    getByText(/close gate/i);
});


// THE CLOSED TOGGLE BUTTON IS DISABLED IF THE GATE IS LOCKED
test("Closed toggle button is disabled if gate is locked", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    expect(getByText(/open gate/i)).toBeDisabled();
});


// THE LOCKED TOGGLE BUTTON IS DISABLED IF THE GATE IS OPEN
test("Locked toggle button is disabled if gate is open", () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    expect(getByText(/lock gate/i).disabled).toBe(true);
});




// TESTING TO SEE IF CLICKING THE BUTTON TRIGGERS THE TOGGLE FUNCTION
test("Closed toggle button triggers toggle functions when clicked", () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(<Controls closed={false} locked={false} toggleClosed={toggleClosed} />);

    const closedButton = getByText(/close gate/i);
    fireEvent.click(closedButton);
    expect(toggleClosed).toHaveBeenCalled();
});
