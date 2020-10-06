
import React from 'react';
import { render, screen } from '@testing-library/react';

const App = require('./App.component').default


describe('App.component', () => {
    it('render App', () => {
        render(<App />);
        expect(screen.getByText('Hello stranger!')).toBeTruthy();
    });


});

