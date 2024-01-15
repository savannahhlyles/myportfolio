import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Intro.css';

export default function Intro() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = 'Hello world!';

  useEffect(() => {
    AOS.init({ duration: 1000 });

    let index = 0;
    const typingInterval = 140;
    const cursorInterval = 500;
    const blinkDuration = 3000;
    const fadeOutDelay = 2000;

    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);

        const cursorBlinkInterval = setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, cursorInterval);

        setTimeout(() => {
          clearInterval(cursorBlinkInterval);
          setCursorVisible(false);
        }, blinkDuration + fadeOutDelay);
      }
    }, typingInterval);

    // Attach event listener to handle navigation on click
    const handleClick = () => {
      window.location.href = '/myportfolio/#Home';
    };

    document.addEventListener('click', handleClick);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="flexbox-container">
      <p id="hello">
        {text}
        <span className={`cursor-line ${cursorVisible ? 'visible' : 'hidden'}`}>|</span>
      </p>
      <p id="click" data-aos="fade-up" data-aos-delay="2700">
        Click anywhere on-screen to enter.
      </p>
    </div>
  );
}
