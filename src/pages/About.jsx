import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';
import headshot from '../images/headshot.jpg';


function About() {
    useEffect(() => {
        AOS.init({
        });
    }, []);

    return (
        <div>
        <div className="flexbox-container-about">
            <NavigationBar />
            <p id="about1" data-aos="fade-right">
            I am a dedicated computer science student from rural South Carolina. My coding journey began in high school, where I delved into programming through free educational platforms due to the lack of a STEM curriculum at my school. This early exposure ignited my passion for the transformative potential of technology and set me on a path towards a robust education in computer science.
            </p>

            <p id="about2" data-aos="fade-up">
            Currently, I am a rising sophomore at Columbia Engineering and honored to be a distinguished C.P. Davis Scholar, reflecting my commitment to academic excellence. Columbia University has endowed me with collaborative skills, problem-solving acumen, and proficiency in various programming languages.
            </p>

            <p id="about3" >
            As I navigate the dynamic technology sector, I am eager to contribute to real-world projects and effect positive change. Moreover, I am passionate about helping students from low-income backgrounds gain access to the opportunities afforded by technology. Through my journey, I hope to inspire and support others in overcoming obstacles and pursuing their own paths in technology.
            </p>

              <div className="button-container-about">
                <button id="port" className="button-about">
                    <span><a href='/myportfolio/#/Portfolio'>Take a look at what I've been working on.</a></span>
                </button>
            </div>

            <img src={headshot} alt="Headshot" id="headshot" data-aos="fade-left"/>
            <Footer />
        </div>
 
        </div>
    );
}

export default About;