import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Warning from "./warning-bar";
import Navbar from "./navbar";
import Home from "./pages/home";
import Advocacy from "./pages/advocacy";
import Products from "./pages/products";
import Ejuice from "./pages/eJuice";
import Contact from "./pages/contact";
import Footer from "./footer";

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='app-wrapper'>
        <ParallaxProvider>
          <Router>
            <div>
              <Warning />
              <Navbar />              
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/advocacy" component={Advocacy} />
                  <Route path="/products" component={Products} />
                  <Route path="/ejuice" component={Ejuice} />
                </Switch>
              <Footer />
            </div>
          </Router>
        </ParallaxProvider>
      </div>
    );
  }
}
