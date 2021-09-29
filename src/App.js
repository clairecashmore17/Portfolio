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
          <Route exact path='/Portfolio' component={About} />
          <Route path='/Portfolio/projects' component={Portfolio} />
          <Route path='/Portfolio/games' component={Games} />
          <Route path='/Portfolio/resume' component={Resume} />
          <Route path='/Portfolio/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
