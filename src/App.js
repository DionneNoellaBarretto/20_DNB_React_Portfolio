import React from "react";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        {/* since we have 2 sections on the main page diving up the width of the sections using div's and col notation as in bootstrap */}
        <div className="container">
          <div className="row">
            {/* for large screens the width of sidebar is upto 3 cols anything smaller will occupy the full screen!  */}
            <div className="col-lg-3">
              <Sidebar />
            </div>

            <div className="col-lg-9 mainComponent">
              {/* NavBar Menu embedded and auto imported using the Auto Import extension */}
              <NavBar />
              {/* switch checks for matching component from the top and break at match!  */}
              <Switch> 
                {/* need to use exact path else the react would render elements from / page and /about page */}
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/resume">
                  <Resume />
                </Route>
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route>
                  {/* for all other incorrect urls redirect user to landing page */}
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
