import React from 'react'
import './Card.css'
import '../index.css'

export const Card = ({
    imgSource,
    title,
    desc,
    skills,
    linkText,
    link
}) => {
    return (
        <div className='card'>
            <img src={imgSource} className='card-img'></img>
            <h1 className='card-title'>{title}</h1>
            <p className='card-desc'>{desc}</p>
            <p className='skills'>skills: {skills}</p>
            <a href={link}>{linkText}</a>
        </div>
    );
};