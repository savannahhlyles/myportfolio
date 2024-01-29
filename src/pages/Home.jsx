import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';
import crown from '../images/crowntransparent.png';
import coding from '../images/coding.svg';
import resume from '../images/resume.svg';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
        });
    }, []);

    return (
        <>
  <div className="flexbox-container">
    <NavigationBar />
    <div id="box1" className="color-block" data-aos="fade-right"></div>
    <div id="box2" className="color-block" data-aos="fade-left"></div>
    <div id="content-container" data-aos="fade-up">
      <h1>Savann<span className="color-change">ah</span></h1>
      <h1>Lyles</h1>
    </div>
  </div>

  <div id="boxes">
    <div id="boxa" className="color-block"></div>
    <div id="boxb" className="color-block"></div>
    <div id="boxc" className="color-block"></div>
  </div>

  <div id="pictures">
    <img src={crown} alt="Crown Image" id="crown"/>
    <img src={coding} alt="Coding Image" id="coding"/>
    <img src={resume} alt="Resume Image" id="resume"/>
  </div>

 <div id="blurb-container">
    <div id="firstb">Undergraduate at <br />Columbia Engineering <br />studying computer science.</div>
    <div id="secondb">Interests in < br /> full-stack SWE, design, < br /> and entrepreneurship.</div>
    <div id="thirdb">Open to new < br /> opportunities!</div>
  </div>
  <div className="button-container">
    <button className="button">
      <span>Resume</span>
    </button>
  </div>
  <Footer />
</>

    );
}
