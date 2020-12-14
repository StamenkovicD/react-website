import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.components';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer.component';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
