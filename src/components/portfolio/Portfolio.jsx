import React from 'react';
import './portfolio.css';
import PortfolioData from './PortfolioData';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        <PortfolioData />
    </section>
  )
}

export default Portfolio