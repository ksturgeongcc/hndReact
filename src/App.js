import React from 'react';
import Navigation from './pages/shared/Navigation';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div className="flex bg-white">       
      <Router>
        <Navigation />
       </Router>        
      </div> 
  );
};
export default App;

