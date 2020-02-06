import React from 'react';
import './App.css';
import NavB from './Components/Nav.js';
import Home from './Components/Pages/Home/Home.js';
import Login from './Components/Pages/login/login.js';
import Register from './Components/Pages/register/register.js';

import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';


function App() {
  return (
    <Router>
      <Container fluid="lg" className="p-0">
        <NavB/>
        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        {/* <Home/>
        <Login/> */}
      </Container>
     </Router>
  );
}

export default App;
