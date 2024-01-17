import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';

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
                <Footer />
            </div>
            <div className="button-container">
                <button className="button">
                    <span>Resume</span>
                </button>
            </div>
            <div id="explore">
            <h1>Explore</h1>
            </div>

        </>
    );
}
