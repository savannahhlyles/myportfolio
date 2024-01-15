import React from 'react';
import './About.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';

export default function About() {
    return (
        <div className="flexbox-container">
            <NavigationBar />
            <p>about</p>
            <Footer />
        </div>
    );
}