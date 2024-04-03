import React from 'react';
import Navigation from './pages/shared/Navigation';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './pages/shared/routes/Main';
const App = () => {
  return (
    <div className="flex bg-white">       
      <Router>
        <Navigation />
        <main className="h-screen w-full overflow-y-scroll bg-white border-l relative">
          <Main />
        </main>
       </Router>        
      </div> 
  );
};
export default App;

