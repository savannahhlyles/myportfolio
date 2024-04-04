import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';
import Footer from '../Footer';
import NavigationBar from '../NavigationBar';
import stocks from '../images/stocks.avif';
import cell from '../images/cell.png';
import site from '../images/site.png';
import fourevyear from '../images/fourevyear.png';
import poker from '../images/poker.png';

export default function Portfolio() {
  useEffect(() => {
      AOS.init({
          duration: 800,
          easing: 'ease-out',
      });

      // Add event listener for scroll
      window.addEventListener('scroll', AOS.refresh);

      // Cleanup event listener on component unmount
      return () => {
          window.removeEventListener('scroll', AOS.refresh);
      };
  }, []);

  return (
    <div className="flexbox-container">
      <NavigationBar />
      <div className="timeline">

        <div className="container right" >
            <div className="content" data-aos="fade-right">
              <h1>March 2024</h1>
              <h2><a href="https://github.com/savannahhlyles/poker" target="_blank">Poker</a></h2>
              <p>
              Developed a Java-based poker game, showcasing proficiency in object-oriented programming <br /> fundamentals and game logic implementation. 
              </p>
            </div>
        </div>

        <div className="container left" >
          <div className="content" data-aos="fade-left">
              <h1>February 2024</h1>
              <h2><a href="https://github.com/ceydat709/FourEvYear" target="_blank">FourEvYear</a></h2>
              <p>
              Contributed to the development of a comprehensive academic planning platform in under 24 hours, utilizing HTML, CSS, JavaScript, Node.js, and MySQL, demonstrating proficiency in full-stack development and database management.
              </p>
            </div>
        </div>

        <div className="container right" >
          <div className="content" >
            <h1>January 2024</h1>
            <h2><a href="https://github.com/savannahhlyles/myportfolio" target="_blank">Portfolio Website</a></h2>
            <p>
              Designed and developed this website, employing HTML, CSS, and JavaScript for implementation, while utilizing GitHub for version control and hosting.
            </p>
          </div>
        </div>

        <div className="container left">
          <div className="content" >
            <h1>December 2023</h1>
            <h2><a href="https://github.com/savannahhlyles/stock-price-prediction" target="_blank">Stock Price Prediction With Random Forest Regression</a></h2>
            <p>
              Developed and implemented a stock price prediction system utilizing Random Forest Regression, showcasing expertise in machine learning, data processing, technical analysis, hyperparameter tuning, and data visualization.
            </p>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h1>November 2023</h1>
            <h2><a href="https://github.com/savannahhlyles/epidemic-simulation" target="_blank">Epidemic Simulation Using Cellular Automaton Infection Model</a></h2>
            <p>
              Developed and implemented a Python-based epidemic simulation using cellular automaton principles, showcasing strong skills in Python programming, simulation modeling, algorithm design, and data visualization.
            </p>
          </div>
        </div>

        <img src={stocks} alt="Stock Market Image" className="stocks" width="500" />
        <img src={cell} alt="Cell Image" className="contour" />
        <img src={site} alt="Website Image" className="site" width="500" />
        <img src={fourevyear} alt="FourEvYear" className="fourevyear" width="500" data-aos="fade-right"/>
        <img src={poker} alt="Poker" className="poker" width="500" data-aos="fade-left"/>
      
      </div>
      <Footer />
    </div>
  );
}
