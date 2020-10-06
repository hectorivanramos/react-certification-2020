
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
    useAuth: jest.fn(),
}));


const HomeMenu = require('./Menu.component').default


describe('Menu.component', () => {

    it('render HomeMenu Login', () => {
        const setVisible = false
        const mockAuth = {
            authenticated: false,
            logout: jest.fn()
        }
        useAuth.mockReturnValue(mockAuth);
        render(
            <Router>
                <HomeMenu useAuth={useAuth} sidebarVisible={setVisible} />
            </Router>

        );
        expect(screen.getByText('Login')).toBeTruthy();
        expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
    });

    it('render HomeMenu Logout', () => {
        const setVisible = false
        const mockAuth = {
            authenticated: true,
            logout: jest.fn()
        }
        useAuth.mockReturnValue(mockAuth);

        render(
            <Router>
                <HomeMenu useAuth={useAuth} sidebarVisible={setVisible} />
            </Router>
        );

        expect(screen.getByText('Logout')).toBeTruthy();
        expect(screen.getByPlaceholderText('Search...')).toBeTruthy();
    });

    it('check Logout', () => {
        const setVisible = false
        const mockAuth = {
            authenticated: true,
            logout: jest.fn()
        }
        useAuth.mockReturnValue(mockAuth);

        render(
            <Router>
                <HomeMenu useAuth={useAuth} sidebarVisible={setVisible} />
            </Router>
        );

        const button = screen.getByText('Logout')
        button.click()
    });

    it('check Login', () => {
        const setVisible = false
        const mockAuth = {
            authenticated: false,
            logout: jest.fn()
        }
        useAuth.mockReturnValue(mockAuth);

        render(
            <Router>
                <HomeMenu useAuth={useAuth} sidebarVisible={setVisible} />
            </Router>
        );

        const button = screen.getByText('Login')
        button.click()
    });

    it('check sidebar', () => {
        const setVisible = jest.fn()
        const mockAuth = {
            authenticated: false,
            logout: jest.fn()
        }
        useAuth.mockReturnValue(mockAuth);

        render(
            <Router>
                <HomeMenu useAuth={useAuth} sidebarVisible={setVisible} />
            </Router>
        );

        const button = screen.getByTestId('sidebar');
        button.click();
    });

});

