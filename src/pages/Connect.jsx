import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Connect.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';

export default function Connect() {
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
        <div>
            <NavigationBar />
            <div className="flexbox-container-connect" data-aos="fade-in">
                <p>
                    Whether you're a fellow student, a professional in the industry, 
                    or someone with a shared interest in the exciting world of computing, 
                    I'm always eager to connect, exchange ideas, and explore potential collaborations.
                </p> 

                <div id="links" className="horizontal-links">
                    <p><a href="https://github.com/savannahhlyles" target="_blank">Github</a></p>
                    <p><a href="mailto:shl2183@columbia.edu">Email</a></p>
                    <p><a href="https://www.linkedin.com/in/savannah-lyles-a5766a254" target="_blank">LinkedIn</a></p>
                </div>

                <p>
                    Feel free to reach out for discussions, projects, or just a friendly 
                    chat about all things tech.
                    <br />
                    Let's build something amazing together!
                </p>
            </div>

            <Footer />
        </div>
    );
}
