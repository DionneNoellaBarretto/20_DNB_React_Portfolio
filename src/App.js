import React from "react";
import Sidebar from "./components/Sidebar";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      {/* since we have 2 sections on the main page diving up the width of the sections using divs and col notation as in bootstrap */}
      <div className="container">
        <div className="row">
          {/* for large screens the width of sidebar is upto 3 cols anything smaller will occupy the full screen!  */}
          <div className="col-lg-3">
            
              <Sidebar />
          
          </div>
          
          <div className="col-lg-9 mainComponent">
           
            <MainComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
