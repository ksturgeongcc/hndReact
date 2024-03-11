import React from 'react';
import UserInformation from '../../components/UserInformation';
import Consultant from '../../components/Consultant';
import Nurse from '../../components/Nurse';

const Department = () => {
    const user = UserInformation();
    return (  
    <>
    {user && (
    <main className="h-screen w-full overflow-scroll bg-white border-l">
        <div id="team" className="section relative  pb-8 bg-white dark:bg-gray-800">
            <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
            <section class="pt-2 pb-10 lg:pb-20 bg-[#F3F4F6]">
                <div class="container">
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{user.forename}'s team</h1>
                    <div class="flex flex-wrap -mx-4">
                        <Consultant
                            consultant_name={user.department_id.consultant}
                            consultant_image={user.department_id.consultant_img}
                        />
                        <Nurse
                            nurse_name={user.department_id.nurse}
                            nurse_image={user.department_id.nurse_img}
                        
                        />
                    </div>
                </div>
            </section>    
        </div>
    </main>
)}
    </>
  );
};
export default Department;
