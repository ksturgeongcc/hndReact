// UserCard.js
import React from 'react';
import {Link} from 'react-router-dom';

const Game = ({ image, url, name, description }) => (
<div className="col-span-12 sm:col-span-6 md:col-span-3">
<Link to={url} target='_blank'>
      <div className="w-full flex flex-col">
        <div className="relative">
          <img src={image} alt="game"  className="w-96 h-auto" />
        </div>
        <div className="flex flex-row mt-2 gap-2">         
          <div className="flex flex-col">
            <p className="text-gray-100 text-sm font-semibold">{name}</p>
            <p className="text-gray-400 text-xs mt-1">{description}</p>
          </div>
        </div>
      </div>
      </Link>
</div>
);
export default Game;
