
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const LoginPage = require('./Login.page').default


describe('Login.page', () => {
    it('render LoginPage', () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        );
        expect(screen.getByText('Welcome back!')).toBeTruthy();
    });


});

