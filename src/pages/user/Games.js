import React from 'react';
import UserInformation from '../../components/UserInformation';
import Game from '../../components/Game';
import gameData from '../../json/games.json'

const Games = () => {
    const user = UserInformation(); 
    return (     
      <>
      {user && (
        <main className="h-screen w-full overflow-scroll bg-white border-l overflow-y-hidden">
          <div id="team" className="section relative bg-white dark:bg-gray-800">
            <div className="container xl:max-w-6xl mx-auto">
                <div className="h-screen flex flex-col p-5 bg-gray-900 items-center justify-center">
                    <h1 className="text-white">Online Games</h1>
                  <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl px-3 overflow-y-scroll">   
                    {/* <!-- game 1 --> */}
                    {gameData.map((game, index) => (
                      <Game
                        key={index}
                        image={game.image}
                        url={game.url}
                        name={game.name}
                        description={game.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </main>
      )}
    </>
  );
};

export default Games;
