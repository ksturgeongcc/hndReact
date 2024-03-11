import React from 'react';
import UserInformation from '../../components/UserInformation';
import Game from '../../components/Game';

const Department = () => {
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
                <p>You are coming to the {user.department_id.name} department</p>
            </h2>
        
        </header>
       
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
         <Game
            heading="Games"
            subheading="Online Games"
            avatarSrc="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png"
            page="/games"
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
