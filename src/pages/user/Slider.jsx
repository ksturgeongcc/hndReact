import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file here

const Slider = () => {
    const [curSlide, setCurSlide] = useState(1);
    const [animation, setAnimation] = useState(false);
    const [diff, setDiff] = useState(0);
    const [autoScrollVar, setAutoScrollVar] = useState(true);

    useEffect(() => {
        const slider = document.querySelector('.slider');
        const $nav = document.querySelector('.nav');
        const winW = window.innerWidth;
        const animSpd = 750; // Change also in CSS
        const distOfLetGo = winW * 0.2;
        const numOfCities = 5; // Change as per your cities array length

        // Your other code goes here...

        // Navigation functions and event listeners go here...

        return () => {
            // Clean up event listeners if necessary
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
        <div class="cont">
            <div class="slider"></div>
            <ul class="nav"></ul>
            <div data-target='right' class="side-nav side-nav--right"></div>
            <div data-target='left' class="side-nav side-nav--left"></div>
        </div>
    </>
    );
};

export default Slider;
