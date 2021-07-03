import Auth from './components/Auth/Auth';
import Photos from './components/Dashboard/Photos';
import Navbar from './components/Navbar/Navbar';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//REDUX
import { useDispatch } from 'react-redux'
import { getPhotos } from '../Store/actions/dashboardActions'

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
 
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <Switch>
          {!user?.token && (<Redirect exact from="/" to="auth" />)}
          {user?.token && (<Redirect exact from="/" to="dashboard" />)}

          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/dashboard">
            <Photos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
