import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';


export default function About() {
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
        <div className="flexbox-container-about">
            <NavigationBar />
            <p data-aos="fade-in">
            ─────────
            <br />
            I am a dedicated computer science 
            student hailing from the state of South Carolina. My coding journey 
            took root in high school, where I immersed myself in programming through 
            free educational platforms due to a lack of STEM curriculum at my rural school. 
            Despite these challenges, this exposure ignited my passion for the transformative 
            potential of technology, propelling me towards a robust education in computer 
            science.
            <br />
            ─────────
            </p>
            <p data-aos="fade-in">
            Currently a freshman at Columbia Engineering, I am honored 
            to be a distinguished C.P. Davis Scholar, reflecting my commitment to excellence. 
            My academic focus centers on emerging technologies, particularly in machine learning 
            and software development.
            </p>
            <p>
            ─────────
            <br />
            My time at Columbia University has endowed me with collaborative 
            skills, problem-solving acumen, and proficiency in various programming languages. 
            As I navigate the dynamic technology sector, I am eager to contribute to real-world projects
            and effect positive change. Additionally, I am passionate about helping students from
            low-income backgrounds gain access to the opportunities afforded by technology.
            <br />
            ─────────
            </p>
              <div className="button-container-about">
                <button id="port" className="button">
                    <span><a href='/myportfolio/#/Portfolio'>Take a look at what I've been working on.</a></span>
                </button>
            </div>
            <Footer />
        </div>
    );
}