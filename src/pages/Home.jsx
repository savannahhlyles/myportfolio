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

        // Add event listener for scroll
        window.addEventListener('scroll', AOS.refresh);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', AOS.refresh);
        };
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
                <img src={crown} alt="Crown Image" id="crown" data-aos="fade-up" data-aos-delay="500"/>
                <img src={coding} alt="Coding Image" id="coding" data-aos="fade-up" data-aos-delay="500"/>
                <img src={resume} alt="Resume Image" id="resume" data-aos="fade-up" data-aos-delay="500"/>
            </div>

            <div id="blurb-container" data-aos="fade-up" data-aos-delay="800">
                <div id="firstb">Undergraduate at <br />Columbia Engineering <br />studying computer science.</div>
                <div id="secondb">Interests in < br /> full-stack SWE, design, < br /> and entrepreneurship.</div>
                <div id="thirdb">Open to new < br /> opportunities!</div>
            </div>

            <div className="button-container">
                <button className="button" data-aos="fade-up" data-aos-delay="800">
                    <span><a href="/Users/savannahlyles/Documents/workspace/myportfolio/src/pages/Resume.pdf">Resume</a></span>
                </button>
            </div>

            <Footer />
        </>
    );
}
