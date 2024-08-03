import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/themess_pic.jpg'


const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src= {theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src= {profile_img} slt=""/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a NOC Engineer and Fullstack Developer with 4 years of experience in the telecommunications industry.</p>
                    <p>I am passionate about leveraging technology to create innovative solutions and enhance network reliability and performance.</p>
                </div>
                <div className='about-skills'>
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Next JS</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
                 
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr/>
        </div>
    </div>
  )
}

export default About