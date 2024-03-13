import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from '../user/Dashboard';
import ParentDashboard from '../parent/ParentDashboard';
import Games from '../user/Games';
import Appointment from '../user/Appointment';
import Home from '../shared/Home';
import Department from './Department';
import Map from './Map';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page or another desired route
    navigate('/');
  };

  const [token, setToken] = useState(null);
  const [parent, setParent] = useState(false);

  useEffect(() => {
    // Fetch the token and parent from wherever you store them (localStorage, sessionStorage, etc.)
    const storedToken = localStorage.getItem('token');
    const storedParent = localStorage.getItem('parent');

    setToken(storedToken);
    setParent(storedParent === 'true');
  }, []);

  useEffect(() => {
    // This useEffect runs whenever the token or parent changes
    // You can add additional logic here based on the token and parent values
    console.log('Token has changed:', token);
    console.log('Parents click here:', parent);
  }, [token, parent]);

  return (
    <>
      <div className="md:flex w-2/5 md:w-1/4 h-screen bg-black border-r hidden">
        <div className="mx-auto py-10">
          <p className="text-2xl font-bold cursor-pointer text-yellow-300 duration-150">Glasgow Clyde</p>
          <p className="text-2xl font-bold cursor-pointer text-white duration-150">Childrens Portal</p>
          <ul className="text-white">
            {token ? (
              <>
               
                {parent ? (
                  <>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/parentDashboard">Dashboard</Link></span>
                  </li>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/appointment">Childs Appointment</Link></span>
                  </li>
                  </>
                ) : (
                  <>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/dashboard">Dashboard</Link></span>
                  </li>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/appointment">Appointment</Link></span>
                  </li>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibol"><Link to="/games">Games</Link></span>
                  </li>
                  </>
                )}
                <button className="w-full mt-10 bg-black py-1.5 text-yellow-300 border-yellow-300 border-2 border-solid bor" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                {/* ... Other non-authenticated navigation options */}
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold"><Link to="/">Home</Link></span>
                </li>
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold"><Link to="/login">Login</Link></span>
                  
                </li>
              
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-yellow-300 duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-semibold"><Link to="https://www.nhsinform.scot/" target='_blank'>NHS Inform </Link></span>
                </li>
                
                <button className="w-full mt-10 bg-black py-1.5 text-yellow-300 border-yellow-300 border-2 border-solid bor">GET IN TOUCH</button>
              </>
            )}
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parentDashboard" element={<ParentDashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/games" element={<Games />} />
        <Route path="/department" element={<Department />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
};

export default Navigation;
