import React, { useRef } from 'react';
import './Contact.css';
import shinelogics from '../../assets/shinelogics.jpg'; // Consider renaming for clarity
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u1hcsbr', 'template_63bzbrj', form.current, 'm9R6kRFtcyljyK311') // Fixed publicKey
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
      <div id="clients">
        <h1 className="contactPageTitle">Experience</h1>
        <p className='clientDesc'>
          I have had the opportunity to work with the company
        </p>
        <div className='clientImgs'>
          <img src={shinelogics} alt="Shinelogics logo" className="clientImg" />
        </div>
      </div>
      <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='your_name' aria-label="Your Name" required />
          <input type="email" className="email" placeholder='Your Email' name='your_email' aria-label="Your Email" required />
          <textarea className='msg' name='message' rows="5" placeholder='Your Message' aria-label="Your Message" required></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href="https://www.linkedin.com/in/mohammed-sameer-b-ab751b255/" target="_blank" rel="noopener noreferrer" className="link">
              <FaLinkedin size={40} color='#0A66C2' />
            </a>
            <a href="https://leetcode.com/u/_sameei_/" target="_blank" rel="noopener noreferrer" className="link">
              <SiLeetcode size={40} color='#F9AB00' />
            </a>
            <a href="https://github.com/mhmd-sameer" target="_blank" rel="noopener noreferrer" className="link">
              <FaGithub size={40} color='#333' />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
