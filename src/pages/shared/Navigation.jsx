import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from '../user/Dashboard';
import ParentDashboard from '../parent/ParentDashboard';
import Games from '../user/Games';
import Appointment from '../user/Appointment';
import Home from '../shared/Home';
import Department from './Department';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page or another desired route
    navigate('/login');
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
      <div className="md:flex w-2/5 md:w-1/4 h-screen bg-white border-r hidden">
        <div className="mx-auto py-10">
          <p className="text-2xl font-bold cursor-pointer text-[#EC5252] duration-150">Glasgow Clyde</p>
          <p className="text-2xl font-bold cursor-pointer text-[#EC5252] duration-150">Childrens Portal</p>
          <ul>
            {token ? (
              <>
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="font-semibold"><Link to="/">Home</Link></span>
                </li>
                {parent ? (
                  <>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/parentDashboard">Dashboard</Link></span>
                  </li>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/parentDashboard">Childs Appointment</Link></span>
                  </li>
                  </>
                ) : (
                  <>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/dashboard">Dashboard</Link></span>
                  </li>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/appointment">Appointment</Link></span>
                  </li>
                  <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold"><Link to="/games">Games</Link></span>
                  </li>
                  </>
                )}
                <button className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                {/* ... Other non-authenticated navigation options */}
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold"><Link to="/">Home</Link></span>
                </li>
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold"><Link to="/login">Login</Link></span>
                </li>
              
                <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-semibold"><Link to="https://nhs.org">NHS Website</Link></span>
                </li>
                
                <button className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">Contact</button>
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
      </Routes>
    </>
  );
};

export default Navigation;
