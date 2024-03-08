import React from 'react';
import UserInformation from '../../components/UserInformation';
import UserCard from '../../components/UserCard';
import DepartmentDashboard from '../../components/DepartmentDashboard';

const Dashboard = () => {
    const user = UserInformation();
    return (
      
      <>
            {user && (

        <main className="h-screen w-full overflow-scroll bg-white border-l">
<div id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">

    <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
        
            <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                <span className="font-light">Welcome</span> {user.forename}
                <p>You are coming to the {user.department} department</p>
            </h2>
        
        </header>
       
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
        <UserCard
            heading={`${user.forename}'s appointment`}
            subheading="DETAILS"
            avatarSrc="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
            page="/appointment"
        />
          <UserCard
            heading='Meet the Team'
            subheading={user.department}
            avatarSrc="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png"
            
        />
         <UserCard
            heading='Map'
            subheading={`${user.department} departmanet location`}
            avatarSrc="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
        />
         <UserCard
            heading="Games"
            subheading="Online Games"
            avatarSrc="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png"
            page="/games"
        />
        </div>
    </div>
</div>
<DepartmentDashboard />
</main>
)}
    </>
  );
};

export default Dashboard;
