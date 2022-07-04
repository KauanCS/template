import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Login from './pages/login';

const Routes = () => (
  <>
    <Router>
      <Switch>
        <Route path="/login" element={<Login />} />
      </Switch>
    </Router>
  </>
);

export default Routes;
