import React, { useState } from 'react';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Blogposts from './pages/Blogposts';
import {useHistory} from "react-router-dom";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
  const history = useHistory();

  function signOut() {
      toggleIsAuthenticated(false)
      history.push("/")
  }

  return (
      <>
          <nav>
              <ul>
                  <li>
                      <NavLink to="/">Home</NavLink>
                  </li>

                  {!isAuthenticated ?
                  <li>
                      <NavLink to="/login">Login</NavLink>
                  </li>
                      : <button onClick={signOut}>Logout</button>}

                  {isAuthenticated ?
                      <li>
                          <NavLink to="/blogposts">Blogposts</NavLink>
                      </li>
                  : ""}
              </ul>
          </nav>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/login">
                  <Login isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
              </Route>
              <Route exact path="/blogposts">
                  <Blog />
              </Route>
              <Route path="/blogposts/:blogId">
                  <Blogposts />
              </Route>
          </Switch>
      </>
  );
}

export default App;







