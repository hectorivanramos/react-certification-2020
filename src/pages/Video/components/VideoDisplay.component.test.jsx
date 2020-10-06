
import React from 'react';
import { render, screen } from '@testing-library/react';

const VideoDisplay = require('./VideoDisplay.component').default

class LocalStorageMock {
    constructor() {
        this.store = {
            favorites: []
        };
    }

    clear() {
        this.store = {};
    }

    getItem(key) {
        return this.store[key] || null;
    }

    setItem(key, value) {
        this.store[key] = value.toString();
    }

    removeItem(key) {
        delete this.store[key];
    }
};

global.localStorage = new LocalStorageMock;
global.localStorage.setItem('favorites', JSON.stringify([{ "id": "_AXx2XSI4Kw" }]))

describe('VideoDisplay.component', () => {


    it('render VideoDisplay with normal video', () => {
        const id = 'HYyRZiwBWc8';
        render(<VideoDisplay id={id} />);
        expect(screen.getByText('Add to favorites')).toBeTruthy();
    });

    it('render VideoDisplay with favorite video', () => {
        const id = '_AXx2XSI4Kw';
        render(<VideoDisplay id={id} />);
        expect(screen.getByText('Remove from favorites')).toBeTruthy();
    });

    it('test add to favorites', () => {
        const id = 'HYyRZiwBWc8';
        render(<VideoDisplay id={id} />);
        const button = screen.getByText('Add to favorites')
        button.click()
    });

    it('test remove from favorites', () => {
        const id = '_AXx2XSI4Kw';
        render(<VideoDisplay id={id} />);
        const button = screen.getByText('Remove from favorites')
        button.click()
    });
});

