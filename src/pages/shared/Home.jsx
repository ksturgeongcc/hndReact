import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import gameImg from '../../assets/images/games.png';
import apptImg from '../../assets/images/appointment.jpg';
import deptImg from '../../assets/images/department.jpg';

const Home = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the token from wherever you store it (localStorage, sessionStorage, etc.)
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleRedirect = (path) => {
    if (token) {
      navigate(path); // Redirect based on the path parameter
    } else {
      navigate('/login');
    }
  };

  return (
    <>
    <div className='bg-black h-full'>
      <div className="mx-6 bg-black">
        <div className="flex justify-between">
          <h1 className="my-6 text-3xl text-white">Glasgow Clyde Childrens Hospital</h1>
          <button className="w-full mt-10 bg-black py-1.5 text-yellow-300 border-yellow-300 border-2 border-solid bor">
            Request your login details
          </button>
        </div>
      </div>
      <div className="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
        <div className="shadow-lg rounded-t-md overflow-hidden" onClick={() => handleRedirect('/games')}>
          <div>
            <img className="w-sm" src={gameImg} alt="" />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold text-white">Play Games</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-t-md overflow-hidden" onClick={() => handleRedirect('/appointment')}>
          <div>
            <img className="w-sm" src={apptImg} alt="" />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold text-white">View your appointment information</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-t-md overflow-hidden cursor-pointer" onClick={() => handleRedirect('/department')}>
          <div>
            <img className="w-sm" src={deptImg} alt="" />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold text-white">View Department Details</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-t-md overflow-hidden" onClick={() => handleRedirect('/department')}>
          <div>
            <img className="w-sm" src={deptImg} alt="" />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold text-white">Meet your team</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex space-y-3 md:space-y-0 md:space-x-4 mt-6 px-10">
        <div className="h-90 border-2 p-5 border-yellow-300 border-solid flex items-center justify-center">
          <p className="text-3xl font-thin text-white">Get access to your appointment details</p>
        </div>
        <div className="h-90 border-2 p-5 border-yellow-300 border-solid flex items-center justify-center">
          <p className="text-3xl font-thin text-white">Get details of the department you will be visiting</p>
        </div>
      </div>
      </div>
      </>
  );
};

export default Home;
