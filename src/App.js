import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

import LoadonTop from './components/LoadonTop';

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Series from './components/series/Series';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';

const App = () => {
  return (
    <React.Fragment>
      <Router >
        <Header />
        <LoadonTop />
        <Switch>
          <Route path="/" exact component={Home} strict />
          <Route path="/series" exact component={Series} strict />
          <Route path="/movies" exact component={Movies} strict />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;