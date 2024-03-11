// UserCard.js
import React from 'react';
import {Link} from 'react-router-dom';
const UserCard = ({ heading, subheading, avatarSrc, page }) => (
  <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
    <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s">
      <div className="relative overflow-hidden px-6">
        <img src={avatarSrc} className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title" />
      </div>
      <div className="pt-6 text-center">
      <Link to={page}><p className="text-lg leading-normal font-bold mb-1">{heading} </p></Link>
        <p className="text-gray-500 leading-relaxed font-light">{subheading}</p>
      </div>
    </div>
  </div>
);
export default UserCard;
