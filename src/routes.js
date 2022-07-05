import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom';

import PageWrapper from './components/pageWrapper';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PageWrapper element={Home} />} />
        <Route path="/perfil" element={<PageWrapper element={Profile} />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Switch>
    </Router>
  </>
);

export default Routes;
