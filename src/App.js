import React from "react";

function App() {
  return (
    <div className="App">
      {/* since we have 2 sections on the main page diving up the width of the sections using divs and col notation as in bootstrap */}
      <div className="container">
        <div className="row">
        {/* for large screens the width of sidebar is upto 3 cols anything smaller will occupy the full screen!  */}
          <div className="col-lg-3"> 
            <div className="sidebar">Sidebar</div>
          </div>
          <br/>
          <div className="col-lg-9 mainComponent"> Main </div>
        </div>
      </div>
    </div>
  );
}

export default App;
