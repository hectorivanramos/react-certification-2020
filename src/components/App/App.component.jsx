import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoPage from '../../pages/Video';
import FavoritesPage from '../../pages/Favorites';
import Private from '../Private/Private.component';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/video/:id">
            <VideoPage />
          </Route>
          <Private exact path="/favorites">
            <FavoritesPage />
          </Private>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/:key?">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
