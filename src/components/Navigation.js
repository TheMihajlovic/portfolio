import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        return (
            <nav id="home" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <a href="/home"><li>Home</li></a>
                        <a href="/about"><li>About</li></a>
                        <a href="/experience"><li>Experience</li></a>
                        <a href="/portfolio"><li>Portfolio</li></a>
                        <a href="/projects"><li>Projects</li></a>
                        <a href="/contact"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        );
    }
}