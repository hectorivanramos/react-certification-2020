
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const SidebarMenu = require('./Sidebar.component').default


describe('Sidebar.component', () => {

    it('render SidebarMenu Login', () => {
        render(
            <Router>
                <SidebarMenu>
                    <div></div>
                </SidebarMenu>
            </Router>

        );
        expect(screen.getByText('Home')).toBeTruthy();
    });
});

