import React from 'react'
import './Projects.css';
import OD from '../../assets/od.png'
import job from '../../assets/job.png';
import election from '../../assets/election.png'
import language from '../../assets/language.png'
import podcast from '../../assets/podcast.png'
const Projects = () => {
  return (
    <section id='Projects'>
        <span className='ProjectTitle'>Projects</span>
        <div className='ProjectBars'>
            <div className='ProjectBar'>
                <div className='ProjectBarText'>
                    <h2>OD Claimer</h2>
                    <img src={OD} alt='od' className='ProjectBarImg' />
                    <p>MERN application to apply for on-duty and to track attendance in college.
                    updates students on-duty record after submitting geotag photo and other details as proof.</p>
                </div>
            </div>
            <div className='ProjectBar'>
                <div className='ProjectBarText'>
                    <h2>Job Recommendation System</h2>
                    <img src={job} alt='job' className='ProjectBarImg' />
                    <p>job recommendation system that recommends users job roles based on given input.
                    React is used for frontend and flask is used as backend.</p>
                </div>
            </div>
            <div className='ProjectBar'>
                <div className='ProjectBarText'>
                    <h2>Indian Election Analysis</h2>
                    <img src={election} alt='election' className='ProjectBarImg' />
                    <p>Utilizing Power BI, this project uses visualizations on party performance, 
                    analyzes demographic influences, and evaluates candidates.</p>
                </div>
            </div>
            <div className='ProjectBar'>
                <div className='ProjectBarText'>
                    <h2>Multi Language Translator</h2>
                    <img src={language} alt='hotel' className='ProjectBarImg' />
                    <p>reated a translator with a Flask backend and React frontend. Integrated a pre-trained Hugging Facefacebook/mbart-large-50-one-to-many-mmt model for accurate translations.</p>
                </div>
            </div>
            <div className='ProjectBar'>
                <div className='ProjectBarText'>
                    <h2>Pod Prism</h2>
                    <img src={podcast} alt='podcast' className='ProjectBarImg' />
                    <p>The platform allows users to explore various podcasts and upload their own, 
                    enhancing community-driven content sharing and accessibility.</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects
