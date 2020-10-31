import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutMyDetails from './Component/AboutMyDetails/AboutMyDetails';
import AllProject from './Component/AllProject/AllProject';
import Blog from './Component/Blog/Blog';
import ContackUs from './Component/ContackUs/ContackUs';
import Home from './Component/Home/Home';
import Resumi from './Component/Home/Resumi/Resumi';
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
           <Home></Home>
          </Route>
          
          <Route exact path='/home'>
           <Home></Home>
          </Route>

          <Route exact path='/all-project'>
           <AllProject></AllProject>
          </Route>

          <Route exact path='/about-me'>
            <AboutMyDetails></AboutMyDetails>
          </Route>

          <Route exact path='/contack-us'>
            <ContackUs></ContackUs>
          </Route>
          <Route exact path='/blog'>
            <Blog></Blog>
          </Route>

          <Route exact path='/resumi'>
              <Resumi></Resumi>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
