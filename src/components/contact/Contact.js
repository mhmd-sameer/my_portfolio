import React, { useRef } from 'react';
import './Contact.css';
import shinelogics from '../../assets/shinelogics.jpg'; // Consider renaming for clarity
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';
import TwitterIcon from '../../assets/twitter.png';
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
        <h1 className="contactPageTitle">My Clients</h1>
        <p className='clientDesc'>
          I have had a opportunity to work with the company
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
            <img src={FacebookIcon} alt="Facebook icon" className="link" />
            <img src={TwitterIcon} alt="Twitter icon" className="link" />
            <img src={InstagramIcon} alt="Instagram icon" className="link" />
            <img src={YoutubeIcon} alt="YouTube icon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
