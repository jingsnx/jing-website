import React from 'react'
import './Home.css'
import '../index.css'
import pinkcircle from '../images/pinkcircle.png'
import purplecircle from '../images/purplecircle.png'

export default function Home() {
    return (
        <div className='home'>
            <div className='text'>
                <h1 className='hi'>
                    hi, im jing
                </h1>
                <p className='desc'>
                    designer and developer
                </p>
            </div>
            <div className='circles'>
                <img src={purplecircle} className='purplecirc' alt=''></img>
                <img src={pinkcircle} className='pinkcirc' alt=''></img>
            </div>
        </div>
    );
}