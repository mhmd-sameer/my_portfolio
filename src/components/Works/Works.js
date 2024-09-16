import React from 'react';
import './Works.css';
import { IoLogoReact } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiPowerbi } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";

function Works() {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I have mentioned my skills below.</span>
      <div className='worksContent'>
        <h2 className='worksTitleDiv'>Technical Skills</h2>
        <div className='worksImgs'>
          <div className='worksImg'>
            <IoLogoReact size={120} color='cyan' />
            <p>React</p>
          </div>
          <div className='worksImg'>
            <SiMongodb size={120} color='green' />
            <p>Mongo DB</p>
          </div>
          <div className='worksImg'>
            <IoLogoNodejs size={120} color='green' />
            <p>Node.js</p>
          </div>
          <div className='worksImg'>
            <SiPowerbi size={120} color='yellow' />
            <p>Power BI</p>
          </div>
        </div>
        <h2 className='worksTitleDiv'>Programming Skills</h2>
        <div className='worksImgs'>
          <div className='worksImg'>
            <FaJava size={120} color='brown' />
            <p>Java</p>
          </div>
          <div className='worksImg'>
            <FaPython size={120} color='cyan' />
            <p>Python</p>
          </div>
          <div className='worksImg'>
            <DiJavascript size={120} color='yellow' />
            <p>Java Script</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
