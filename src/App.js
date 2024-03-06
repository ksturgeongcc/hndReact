import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/user/Dashboard';


const App = () => {
 

  return (
    <Router>
      <div>
        <nav>
          <ul>
         
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
            
           
          </ul>
        </nav>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          

         
        
              
        </Routes>
    </Router>
  );
};

export default App;