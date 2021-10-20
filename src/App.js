import React from 'react';

function App() {
  return (
    <div className="App">
    {/* since we have 2 sections on the main page diving up the width of the sections using divs and col notation as in bootstrap */}
      <div className="col-3 sidebar"> Sidebar</div>
      <div className="col-9 mainComponent"> Main </div>
    </div>
  );
}

export default App;
