
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const VideoPage = require('./Video.page').default


describe('Video.page', () => {
    it('render VideoPage', () => {
        render(
            <Router>
                <VideoPage />
            </Router>
        );
        expect(screen.getByText('Video')).toBeTruthy();
    });


});

