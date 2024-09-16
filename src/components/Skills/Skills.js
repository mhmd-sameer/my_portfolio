import React from 'react'
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import MlProjects from '../../assets/ml-projects.png';


function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am passionate about my career and enjoy working on diverse projects.
        My skills include UI/UX design, website design, and app design. I strive to
        create intuitive and aesthetically pleasing designs that provide an exceptional
        user experience. Here’s a brief overview of what I can offer:</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='ui-design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Designing user-friendly interfaces and experiences that delight users.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='web-design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>Creating visually appealing and responsive websites tailored to client needs.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={MlProjects} alt='Ml projects' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Machine Learning</h2>
                    <p>Leveraging data and algorithms to create intelligent systems and solutions.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills
