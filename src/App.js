import React ,{lazy,Suspense}from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
// import DashBoard from './Components/DashBord';
const DashBoard = lazy(() => import('./Components/DashBord'));

function App() {
  return (
    <Suspense fallback={<div className="lazyLoading">Loading ...</div>}>
    <div className="App">
      <Router>
        <Route exact path="/" component={DashBoard} />
      </Router>
    </div>
    </Suspense>
  );
}

export default App;
