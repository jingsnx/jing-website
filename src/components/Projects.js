import React from 'react'
import './Projects.css'
import '../index.css'
import {Card} from './Card'
import ongoingcard from '../images/ongoingcard.png'

export default function Projects() {
    return (
        <div className='projects'>
            <h1 className='projects-title'>
                projects
            </h1>
            <div className='card-grid'>
                <Card
                    imgSource={ongoingcard}
                    title='Personal Website'
                    desc="This website that you're looking at right now! A simple portfolio website made using React."
                    skills='React, HTML, CSS, Node.js'
                />
                <Card
                    imgSource={ongoingcard}
                    title='NUKEMAP3D/VR'
                    desc="A 3D version of Alex Wellerstein's NUKEMAP website, a web-based nuclear weapons effects simulator."
                    skills='OpenGl, JavaScript, CesiumJS'
                />
                <Card
                    imgSource={ongoingcard}
                    title="Oregon Road '83"
                    desc="description"
                />
            </div>
        </div>
    );
}