import React from 'react'
import './Intro.css'
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Mohammed Sameer</span><br />Full Stack Developer</span>
            <p className="introPara">I am passionate about building innovative solutions and applying <br />machine learning techniques to solve real-world problems.<br /> Currently, I'm a student honing my skills and working on exciting projects.</p>
            <Link to="contact" smooth={true} duration={500}><button className='btn'><img src={btnImg} alt='hire' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
