import React from "react";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import { Route, Redirect, Switch,useLocation } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// https://www.framer.com/docs/animate-presence/ for fade in/ fade out effect on the about / projects page
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
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
{/* exit before enter ensures the animations end before the other start even when switching between tabs!  */}
            <AnimatePresence exitBeforeEnter>
              {/* the location tells framer where the animation presence effect needs to be applied */}
              <Switch location={location} key={location.key}>
                {/* need to use exact path else the react would render elements from / page and /about page */}
                {/* External Landing Page redirect https://stackoverflow.com/questions/42914666/react-router-external-link */}
                <Route
                  exact
                  path="/"
                  component={() => {
                    window.location.href =
                      "https://dionnenoellabarretto.github.io/";
                    return null;
                  }}
                />
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
                  {/* for all other incorrect urls redirect user to about page */}
                  {/* https://reactrouter.com/web/api/Redirect */}
                  <Redirect to="/index.html" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
