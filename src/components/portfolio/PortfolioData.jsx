import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const PortfolioDataItem = [
  {
    id: 1,
    Image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Charts templates & infographics in figma",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-figma",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    Image: IMG5,
    title: "Charts templates & infographics in figma",
    github: "https://github.com",
    demo: "https://dribble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-figma",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Charts templates & infographics in figma",
    github: "https://github.com",
    demo: "https://dribble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-figma",
  },
];

const PortfolioData = () => {
  return (
    <div className="container portfolio__container">
      {PortfolioDataItem.map(({ id, Image, title, github, demo }) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={Image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default PortfolioData;
