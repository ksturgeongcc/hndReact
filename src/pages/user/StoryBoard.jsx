import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const StoryBoard = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    "A child arrives at the hospital.",
    "They are greeted by friendly staff.",
    "The child is taken to a comfortable room.",
    "Doctors and nurses assess their condition.",
    "Treatment is provided based on the diagnosis.",
    "The child leaves the hospital feeling better."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 3000); // Switch frame every 5 seconds

    return () => clearInterval(interval);
  });

  return (
    <div className="container mx-auto p-4">
      {frames.map((frame, index) => (
        <CSSTransition
          key={index}
          in={index === currentFrame}
          timeout={-1000}
          classNames="frame"
          unmountOnExit
        >
          <div className="flex absolute top-0 left-0 h-full w-full bg-black text-white items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">{frame}</h1>
          </div>
        </CSSTransition>
      ))}
    </div>
  );
};

export default StoryBoard;
