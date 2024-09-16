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
            <span className="introText">I'm <span className="introName">Mohammed Sameer</span><br />Web Designer</span>
            <p className="introPara">I am a Student</p>
            <Link><button className='btn'><img src={btnImg} alt='hire' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='' className='bg'/>
    </section>
  )
}

export default Intro
