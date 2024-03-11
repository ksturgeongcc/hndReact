import React from 'react';
import UserInformation from '../../components/UserInformation';
import MedicalTeam from '../../components/MedicalTeam';
const Department = () => {
    const user = UserInformation();
    console.log(user);
    return (
      
      <>
            {user && (

        <main className="h-screen w-full overflow-scroll bg-white border-l">
<div id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">

    <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
        
            <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                <span className="font-light">Welcome</span> {user.department_id.consultant}
                <p>Find out more about the {user.department_id.name} department</p>
            </h2>
        
        </header>
       
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
            <MedicalTeam
                name={user.department_id.consultant}
                image={user.department_id.consultant_img}
                />
        </div>
    </div>
</div>
</main>
)}
    </>
  );
};

export default Department;
