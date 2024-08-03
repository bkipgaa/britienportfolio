import React from 'react'
import './Hero.css'
import profile_img from '../../assets/kip_icon.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=""/>
        <h1><span>I'm Britien Kipgaa,</span> fullstack developer and Network Engineer
             Based in Kenya
        </h1>
        <p>I am a Fullstack Developer and Network Engineer based in Kenya, 
            with 4 years of experience working as a NOC and DevOps Engineer at iNet Africa.
        </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero