// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [patient_number, setPatientNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [guardian_name, setGuardianName] = useState('');
  const [guardian, setGuardian] = useState('');
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost/api/register', {
        patient_number,
        password,
        email,
        dob,
        guardian_name,
        forename,
        surname,
      });
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error.response.data.error);
    }
  };

  return (
    <>
    <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none flex flex-col justify-center items-center">
    <h3 className="pt-4 text-2xl text-center">Register to get access to the hopital portal</h3>
    <div className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="surnamer">
                First Name
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="forename"
                value={forename}
                onChange={(e) => setForename(e.target.value)}
                type="text"
                placeholder="First Name"
            />
             <label className="block mb-2 text-sm font-bold text-gray-700" for="surname">
                Surname
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="tel"
                placeholder="Surname"
            />
        </div>
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" for="patient_number">
                Patient Number
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="patient_number"
                value={patient_number}
                onChange={(e) => setPatientNumber(e.target.value)}
                type="tel"
                placeholder="Paitent Number"
            />
             <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="patient_number">
                Email
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
            />
            
        </div>
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" for="guardian_name">
                Guardian Name
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="guardian_name"
                value={guardian_name}
                onChange={(e) => setGuardianName(e.target.value)}
                type="tel"
                placeholder="Guardian Name"
            />
             <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="guardian">
             What is your relationship to the patient?
            </label>
            <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="guardian"
                value={guardian}
                onChange={(e) => setGuardian(e.target.value)}
                type="text"
                placeholder="relationship to patient"
            />
            
        </div>
        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
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
             <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dob">
                Date of birth
            </label>
            <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="dob"
                type="datelocal"
                placeholder="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />
        </div>
        <div className="mb-6 text-center">
            <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleRegister}
            >
                Sign Up
            </button>
        </div>                       
    </div>
    </div>
    </>
  );
};

export default Register;
