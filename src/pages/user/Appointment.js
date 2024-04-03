import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInformation from '../../components/UserInformation';
import { format } from 'date-fns';
import StoryBoard from './StoryBoard'; // Import the Storyboard component

function Appointment() {
    const user = UserInformation();
    console.log('User:', user);

    const [showStoryboard, setShowStoryboard] = useState(false); // State variable to control the display of the storyboard

    return (
        <>
            {user && (
                <div className='bg-white'>
                    <div>
                        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                                <img className="w-full" alt={` ${user.department_id.name} department details`} src={`/images/department/${user.department_id.img_one}`} />
                                <img className="mt-6 w-full" alt={` ${user.department_id.name} department details`} src={`/images/department/${user.department_id.img_two}`} />
                            </div>
                            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                                <div className="border-b border-gray-200 pb-6">
                                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Patient Number: {user.patient_number} </p>
                                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{user.forename}'s Appointment Details</h1>
                                </div>
                                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Department: </p>
                                    <div className="flex items-center justify-center">
                                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">{user.department_id.name}</p>
                                    </div>
                                </div>

                                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                                    <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Date: </p>
                                    <div className="flex items-center justify-center">
                                        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">  {format(new Date(user.appointment_date), 'MMMM dd, yyyy hh:mm a')}</p>
                                    </div>
                                </div>

                                <button
                                    id="storyboard" // Button to toggle the display of the storyboard
                                    className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none"
                                    onClick={() => setShowStoryboard(true)} // Set showStoryboard to true when the button is clicked
                                >
                                    <svg className="mr-3 text-white dark:text-gray-900" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Your SVG icon */}
                                    </svg>
                                    What will happen on the day?
                                </button>

                                <div>
                                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7 mb-7">{user.appointment_notes}</p>
                                </div>
                                <div>
                                    <Link to="/department">
                                        <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-red-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
                                            Meet the team
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Conditional rendering of the Storyboard component */}
                    {showStoryboard && <StoryBoard />}
                </div>
            )}
        </>
    )
}

export default Appointment;
