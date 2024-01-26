import React from 'react'
import './About.css'
import '../index.css'
import aboutimg from '../images/aboutimg.png'

export default function About() {
    return (
        <div className='about'>
            <h1 className='about-title'>about me</h1>
            <div className='about-body'>
                <div className='img-container'>
                    <img src={aboutimg} className='image'></img>
                </div>
                <div className='text-container'>
                    <p className='about-text'>
                        Hi, I'm Jing! I'm a computer science student at Stevens Institute of Technology.
                    </p>
                    <p className='about-text'>
                        I'm interested in pursuing a career in web development. In my free time I enjoy doing graphic design work and building keyboards.
                    </p>
                    <div className='links'>
                        <a href='https://github.com/jingsnx' target='_blank' className='link-item'>
                            github
                        </a>
                        <a href='https://www.linkedin.com/in/jing-ngo/' target='blank' className='link-item'>
                            linkedin
                        </a>
                        <a href ='mailto:jingsngo@gmail.com' className='link-item'>
                            contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}