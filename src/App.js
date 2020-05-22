import React from 'react';
import Education from './Components/Education'
import Inicio from './Components/Inicio'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Inicio/>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/Education">
          <Education />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
