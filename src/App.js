import React from 'react';
import Sidebar from './Components/Sidebar'
import Education from './Components/Education'
import AboutMe from './Components/AboutMe'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar/>
        <Education/>
        <AboutMe/>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
