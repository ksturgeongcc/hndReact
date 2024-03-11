import React from 'react'

export const Consultant = ({consultant_name, consultant_image}) => {
  return (
    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
    <div class="bg-white rounded-lg overflow-hidden mb-10">
      <img class="w-full" src={`/images/staff/${consultant_image}`} alt="Department Nurse" />
        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
        <p class="text-base text-body-color leading-relaxed mb-7">Consultant</p>
          <h3>{consultant_name}</h3>           
          <p class="text-base text-body-color leading-relaxed mb-7">
            In Scotland, there are special doctors called "consultants" who are like the superhero leaders of different teams in the hospital. These doctors know a lot about specific things, like how to fix hearts or help with bones. They help make important decisions about how to take care of patients, kind of like a captain leading a team. They also teach younger doctors and do special projects to make sure everyone in the hospital does their best to help people get better. So, consultants are like the wise and experienced leaders who make sure everything runs smoothly and people get the best care possible.
          </p>          
        </div>
    </div>
  </div>
  )
}
export default Consultant;
