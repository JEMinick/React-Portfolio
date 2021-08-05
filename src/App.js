// eslint-disable-next-line
import React, { Component } from 'react';

// eslint-disable-next-line
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from './components/Home'; 
import Projects from './components/Projects';
import Resume from './components/Resume';

// import Articles from './Articles.js'; 

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Route exact path="/React-Portfolio" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Footer fburl="https://www.facebook.com/ed.minick"/>

        {/* <Route path="/about" component={About} />         */}

        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Eds logo" /> */}

          {/* <div className="navigation-sub">

            <a href="/" className="item">Projects</a>
            <a href="/articles" className="item">Articles</a>
            <a href="/about" className="item">About</a>

          </div> */}

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
