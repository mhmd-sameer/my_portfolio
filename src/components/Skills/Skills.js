import React from 'react'
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am passonaite about my career</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='ui-design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='web-design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>This is a dempo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='app-design' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo text.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills
