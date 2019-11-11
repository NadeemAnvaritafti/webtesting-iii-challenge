// Test away!

import React from 'react';
import {render} from '@testing-library/react';

import Controls from './Controls';

test('provides buttons to toggle', () => {
    const {getByTestId} = render(<Controls />);
    getByTestId(/buttonlocked/i);
    getByTestId(/buttonclosed/i);
});
