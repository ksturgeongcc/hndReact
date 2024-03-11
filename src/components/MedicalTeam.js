import React from 'react'

export const MedicalTeam = ({name, image}) => {
  return (
    <main className="h-screen w-full overflow-scroll bg-white border-l">
    <div id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
        <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
            <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={`/images/staff/${image}`} alt="product designer" />
                <h1 class="text-lg text-gray-700"> {name} </h1>
                <h3 class="text-sm text-gray-400 ">Your tema</h3>
                <p class="text-xs text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
    </div>
 </main>
  )
}
export default MedicalTeam;
