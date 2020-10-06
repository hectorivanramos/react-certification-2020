
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const HomePage = require('./Home.page').default


describe('Home.page', () => {
    it('render HomePage', () => {
        render(
            <Router>
                <HomePage />
            </Router>
        );
        expect(screen.getByText('Hello stranger!')).toBeTruthy();
    });


});

