import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Intro.css';

export default function Intro() {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = 'Hello world!';

  useEffect(() => {
    // Initialize aos
    AOS.init({ duration: 1000 });

    let index = 0;
    const typingInterval = 140;
    const cursorInterval = 500; // Blink interval for the cursor
    const blinkDuration = 3000; // Duration for the cursor to blink
    const fadeOutDelay = 2000; // Delay before cursor fade-out after blinking

    const intervalId = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        // Start blinking cursor
        const cursorBlinkInterval = setInterval(() => {
          setCursorVisible((prev) => !prev);
        }, cursorInterval);

        // Stop blinking and fade out cursor after a delay
        setTimeout(() => {
          clearInterval(cursorBlinkInterval);
          setCursorVisible(false);
        }, blinkDuration + fadeOutDelay);
      }
    }, typingInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flexbox-container">
      <p id="hello">
        {text}
        {/* Render the cursor line with conditional visibility */}
        <span className={`cursor-line ${cursorVisible ? 'visible' : 'hidden'}`}>|</span>
      </p>
      <p id="click" data-aos="fade-up" data-aos-delay="2700">
        Click anywhere on-screen to enter.
      </p>
    </div>
  );
}
