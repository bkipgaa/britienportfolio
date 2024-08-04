import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f79f18e6-d610-44a0-b501-f4b6233e3161");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setResult("There was an error submitting the form");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt=""/>
        <div className="contact-section">
          <div className="contact-left">
            <h2>Let's talk</h2>
            <p>I'm currently available to take on new projects, so feel free to contact me</p>
            <div className='contact-details'>
              <div className="contact-detail">
                <img src={mail_icon} alt="" />
                <p>bkipgaa@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" />
                <p>+254 712200198</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />
                <p>KLF, MLD Kenya</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter Your name' name='name' required />
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder='Enter Your email' name='email' required />
            <label htmlFor="message">Write Your message here</label>
            <textarea name="message" rows="8" placeholder='Enter Your message' required />
            <button type='submit' className='contact-submit'>Submit</button>
          </form>
        </div>
        {result && <p className="result-message">{result}</p>}
      </div>
    </div>
  );
};

export default Contact;
