import React from 'react';
import { Link } from 'react-router-dom';
import UserInformation from '../../components/UserInformation';
const ParentDashboard = () => { 
  const user = UserInformation();    
    return (
        <>
        <main className="h-screen w-full overflow-scroll bg-white border-l">
            <aside className="parent-nav">
                <ul>
                    <li><Link to="/parentDashboard">Dashboard</Link></li>
                    <li><Link to="/details">Details</Link></li>
                    <li><Link to="/appointment">Appointment</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </aside>
            <div className="parent-dashboard">
            {user && (
                <ul key={user._id} >
                    <p>Hi {user.guardian_name}, your child {user.forename} has an appointment to attend the {user.department} department</p>
                    <p>Details of patient condition</p>
                    <p>{user.notes}</p>
                </ul>
            )}            
            </div>
        </main>
        </>
    );
}
export default ParentDashboard;