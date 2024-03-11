import React from 'react'

export const Nurse = ({nurse_name, nurse_image}) => {
  return (
    <div class="w-full md:w-1/2 xl:w-1/3 px-4">
      <div class="bg-white rounded-lg overflow-hidden mb-10">
        <img class="w-full" src={`/images/staff/${nurse_image}`} alt="Department Nurse" />
          <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <p class="text-base text-body-color leading-relaxed mb-7">Nurse</p>
            <h3>{nurse_name}</h3>           
            <p class="text-base text-body-color leading-relaxed mb-7">
            Just like how a hospital has superhero doctors, it also has a superhero nurse who is like the captain of the nursing team. This superhero nurse is called the head nurse of the department. The head nurse is really good at taking care of patients and helps all the other nurses do their jobs well. They make sure everyone has what they need, like band-aids and medicine, and they keep everything organized. The head nurse is like the team leader, making sure all the nurses work together smoothly, helping the doctors, and making sure patients feel safe and cared for. They're a bit like the caring captain of a big ship, making sure everything sails smoothly and everyone is happy and healthy.
            </p>          
          </div>
      </div>
    </div>
  )
}
export default Nurse;
