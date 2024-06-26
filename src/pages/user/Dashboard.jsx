import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserInformation from '../../components/UserInformation';
import Typewriter from './Typewriter';
import Avatar from '../shared/Avatar';
import './button.css';

const Dashboard = () => {
    const user = UserInformation();
    const [isVisible, setIsVisible] = useState(false);
    const [firstRowFinished, setFirstRowFinished] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }); // Delay of 5 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    const handleFirstRowFinish = () => {
        setFirstRowFinished(true);
    };

    return (
        <>
            {user && (
                <section className='h-full bg-black flex flex-col items-center justify-center'>
                <Avatar
                    name={user.forename}
                    message={user.notes}     
                >
                </Avatar>
                    <div className="bg-black w-full text-white">
                        <div className="container mx-auto flex flex-col md:flex-row items-center">
                            <div className="flex flex-col w-full justify-center items-start p-8">
                                <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Hi {user.forename}</h1>
                                <h2>Welcome to <Typewriter text="Glasgow Clyde Childrens Hospital" delay={100} onFinish={handleFirstRowFinish} /></h2>
                                {firstRowFinished && (
                                    <p>{`You are ${user.notes}`}</p>
                                )}
                                <div className={`slide-in-container ${isVisible ? 'visible' : ''} flex w-full`}>
                                <Link to="/appointment" className="bg-transparent hover:bg-yellow-300 hover:text-black text-yellow-300 rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-[33%]"> Appointment Details</Link>
                                <Link to="/details" className="bg-transparent hover:bg-yellow-300 hover:text-black text-yellow-300 rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-[33%]"> Your Details</Link>
                                <Link to="/games" className="bg-transparent hover:bg-yellow-300 hover:text-black text-yellow-300 rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent w-[33%]"> Games Details</Link>
                               
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Dashboard;
