import React, { useState, useEffect, useRef } from 'react';
import './Intro.css';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const isMounted = useRef(true);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeNextLetter = () => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        timeoutId = setTimeout(typeNextLetter, 100);
      }
    };

    typeNextLetter();

    return () => {
      isMounted.current = false;
      clearTimeout(timeoutId);
    };
  }, [text]);

  return (
    <div className="typewriter-container">
      <p id="hello">{displayText}</p>
    </div>
  );
};

export default function Intro() {
  return (
    <div className="flexbox-container">
      <Typewriter text="Hello world!" />
      <p id="click">Click anywhere on-screen to enter.</p>
    </div>
  );
}
