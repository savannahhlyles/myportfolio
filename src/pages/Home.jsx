import React from 'react';
import './Home.css';
import Footer from "../Footer";
import NavigationBar from '../NavigationBar';

export default function Home() {
    return (
        <div className="flexbox-container">
            <NavigationBar />
            <p>home</p>
            <Footer />
        </div>
    );
}