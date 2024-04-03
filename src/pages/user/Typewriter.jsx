import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, onFinish }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else {
      onFinish && onFinish(); // Call onFinish callback when typing finishes
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text, onFinish]);

  return <span>{currentText}</span>;
};

export default Typewriter;
