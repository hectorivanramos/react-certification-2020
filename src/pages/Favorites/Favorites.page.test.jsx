
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const FavoritesPage = require('./Favorites.page').default


describe('Favorites.page', () => {
    it('render FavoritesPage', () => {
        render(
            <Router>
                <FavoritesPage />
            </Router>
        );
        expect(screen.getByText('Favorite Vids!')).toBeTruthy();
    });


});

