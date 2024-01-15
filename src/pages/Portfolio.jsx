import React from 'react';
import './Portfolio.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';

export default function Portfolio() {
    return (
        <div className="flexbox-container">
            <NavigationBar />
            <p>portfolio</p>
            <Footer />
        </div>
    );
}