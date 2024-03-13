// UserCard.js
import React from 'react';


const HomeCard = ({ gameImage, title, text, page }) => (
  <div className="shadow-lg rounded-t-md overflow-hidden ">
      <div className="border-yellow-300 border-2 border-solid">
          <div className="p-2 relative">
              <h3 className="text-lg mt-6 font-semibold tex-white">{title}</h3>
              <p>{text}</p>
              <img className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6" src={gameImage} alt="" />
          </div>
      </div>
  </div>
);
export default HomeCard;
