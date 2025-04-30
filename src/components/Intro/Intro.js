import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png';
import sam from '../../assets/sam.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import resume from '../../assets/Sameer_Over_all.pdf';
import download from '../../assets/download.webp';
const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Mohammed Sameer</span><br />Full Stack Developer</span>
            <p className="introPara">I am passionate about building innovative solutions and applying <br />machine learning techniques to solve real-world problems.<br /> Currently, I'm a student honing my skills and working on exciting projects.</p>
            <div className="btnContainer">
              <Link to="contact" smooth={true} duration={500}>
                <button className='btn'>
                  <img src={btnImg} alt='hire' className='btnImg' />Hire Me
                </button>
              </Link>
              <a href={resume} download="Mohammed_Sameer_Resume.pdf">
                <button className='btn'>
                  <img src={download} alt='resume' className='btnImg' /> Resume
                </button>
              </a>
          </div>
        </div>
        <img src={sam} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
