import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Home from '../Home';
import Dashboard from '../../user/Dashboard';
import ParentDashboard from '../../parent/ParentDashboard';
import Appointment from '../../user/Appointment';
import Games from '../../user/Games';
import Department from '../Department';
import Map from '../Map';

const Main = () => {
    return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/parentDashboard" element={<ParentDashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/games" element={<Games />} />
        <Route path="/department" element={<Department />} />
        <Route path="/map" element={<Map />} />
    </Routes>
    )
}
export default Main;