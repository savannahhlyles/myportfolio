import React from 'react';
import 'aos/dist/aos.css';
import './Portfolio.css';
import Footer from '../Footer';
import NavigationBar from '../NavigationBar';
import stocks from '../images/stocks.avif';
import contour from '../images/contour.jpg';
import site from '../images/site.png';

export default function Portfolio() {
  return (
    <div className="flexbox-container">
      <NavigationBar />
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h1>February 2024</h1>
            <h2>Project Name</h2>
            <p>
              Project description.
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h1>January 2024</h1>
            <h2><a href="https://savannahhlyles.github.io/myportfolio/" target="_blank">Portfolio Website</a></h2>
            <p>
              Designed and developed this website, employing HTML, CSS, and JavaScript for implementation, while utilizing GitHub for version control and hosting.
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
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
        <img src={contour} alt="Contour Lines Image" className="contour" width="500" />
        <img src={site} alt="Website Image" className="site" width="500" />
      </div>
      <Footer />
    </div>
  );
}
