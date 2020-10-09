import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoard from './Components/DashBord'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={DashBoard} />
      </Router>
    </div>
  );
}

export default App;
