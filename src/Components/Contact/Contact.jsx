import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=""/>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free  to contact me</p>
                    <div className='contact-details'>
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/>
                        <p>bkipgaa@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=""/>
                        <p>+254 712200198</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=""/> 
                        <p>KLF, MLD Kenya</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter Your email' name='email'/>
                <label htmlFor="">Write Your message here</label>
                <textarea name="message" rows="8" placeholder/>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
                    </div>
                    

        </div>

    </div>
  )
}

export default Contact