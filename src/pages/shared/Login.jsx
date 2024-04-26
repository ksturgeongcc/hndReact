import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [patient_number, setPatientNumber] = useState('');
  const [password, setPassword] = useState('');
  const [parent, setParent] = useState(false); // State for the checkbox
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        patient_number,
        password,
      });

      console.log('Login successful');
      console.log('Token:', response.data.token);

      // Save the token to local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('patientNum', response.data.patient_number);

      // Save rememberMe state to local storage
      if (parent) {
        localStorage.setItem('parent', 'true');
      } else {
        localStorage.removeItem('parent');
      }

      if (parent) {
        navigate('/parentDashboard'); // Redirect to the special dashboard for "Remember Me" users
      } else {
        navigate('/dashboard'); // Redirect to the regular dashboard
      }

    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  // Load rememberMe state from local storage on component mount
  useEffect(() => {
    const storedParent = localStorage.getItem('parent');
    if (storedParent) {
      setParent(true);
    }
  }, []);

  return (

    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Welcome! Please log in</h3>
						<div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="patient_number">
									Username
								</label>
								<input
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="patient_number"
                  value={patient_number}
                  onChange={(e) => setPatientNumber(e.target.value)}
									type="tel"
									placeholder="Paitent Number"
								/>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
								/>
								<p className="text-xs italic text-red-500">Forgot your login details?</p>
							</div>
							<div className="mb-4">
								<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" checked={parent} onChange={() => setParent(!parent)}/>
   
								<label className="text-sm" for="checkbox_id">
									Parent/Guardian please select
								</label>
							</div>
							<div className="mb-6 text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
                  onClick={handleLogin}

								>
									Sign In
								</button>
							</div>
							
						</div>
					</div>


  );
};

export default Login;
