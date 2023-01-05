import React from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import ME from '../../assets/me-about.jpg';

import './about.css';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about_image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>experience</h5>
              <small>3+ years working</small>
            </article>

            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon' />
              <h5>Projects</h5>
              <small>81+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eum, possimus, quo officiis et voluptates cum esse qui nam aliquid culpa quas ipsa natus nisi explicabo facere consequuntur, sapiente dolore.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About