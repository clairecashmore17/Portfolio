import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Games from './components/Games';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Nav />
        </Header>
        <Switch>
          <Route exact path='https://clairecashmore17.github.io/Portfolio' component={About} />
          <Route path='https://clairecashmore17.github.io/Portfolio/projects' component={Portfolio} />
          <Route path='https://clairecashmore17.github.io/Portfoliogames' component={Games} />
          <Route path='https://clairecashmore17.github.io/Portfolioresume' component={Resume} />
          <Route path='https://clairecashmore17.github.io/Portfoliocontact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
