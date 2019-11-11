// Test away

import React from 'react';
import {render} from '@testing-library/react';

import Dashboard from './Dashboard';

test('contains Controls component', () => {
    const {getByTestId} = render(<Dashboard />);
    getByTestId(/controls/i);
});

test('contains Display component', () => {
    const {getByTestId} = render(<Dashboard />);
    getByTestId(/display/i);
});