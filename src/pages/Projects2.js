import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import projects from "./FSProjects.json";

function Projects() {
  return (
    <div>
      <div className="container portfolio-container">
        <h1 className="title">Projects List</h1>
        <div className="row">
          <PortfolioCard
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            location={projects[0].location}
          />
          <PortfolioCard
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            location={projects[1].location}
          />
        </div>
        <div className="row">
          <PortfolioCard
            name={projects[2].name}
            image={projects[2].image}
            project={projects[2].project}
            location={projects[2].location}
          />
          <PortfolioCard
            name={projects[3].name}
            image={projects[3].image}
            project={projects[3].project}
            location={projects[3].location}
          />
        </div>
        <div className="row">
          <PortfolioCard
            name={projects[4].name}
            image={projects[4].image}
            project={projects[4].project}
            location={projects[4].location}
          />
          <PortfolioCard
            name={projects[5].name}
            image={projects[5].image}
            project={projects[5].project}
            location={projects[5].location}
          />
        </div>
      </div>
    </div >
  );
}

export default Projects;

// =========================================================================

import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <div className="card port-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Project:</strong> {props.project}
          </li>
          <li>
            <strong>Demo:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>

      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
      
      <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
      />
      
      <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      />

    </div>
  )
}
 
export default Projects
