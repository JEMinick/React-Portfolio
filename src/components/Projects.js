import React from "react";
import PortfolioCard from "./PortfolioCard";

import project0image from "../assets/cpo-ppvt.png"
import project1image from "../assets/brewery-crawler.png"
import project2image from "../assets/weather-map.png"
import project3image from "../assets/CodeQuizApp.png"
import project4image from "../assets/DailyPlanner.png"
import project5image from "../assets/pw-generator.png"

let aProjects = [
  {
    "name": "Personal Pet Vaccine Tracker",
    "image": "CPOPPVT.png",
    "project": "CPO-PPVT",
    "location": "https://jeminick.github.io/CPO_PPVT/"
  },
  {
    "name": "Brewery Crawler",
    "image": "brewery-crawler.png",
    "project": "Brewery-Crawler",
    "location": "https://jeminick.github.io/Brewery-Crawler/"
  },
  {
    "name": "Weather Map App",
    "image": "WeatherMap.png",
    "project": "Weather-Dashboard",
    "location": "https://jeminick.github.io/Weather-Dashboard/"
  },
  {
    "name": "JavaScript Coding Quiz App",
    "image": "CodeQuizApp.png",
    "project": "JEM-CodeQuiz",
    "location": "https://jeminick.github.io/JEM-CodeQuiz/"
  },
  {
    "name": "Daily Planner App",
    "image": "DailyPlanner.png",
    "project": "Daily-Planner",
    "location": "https://jeminick.github.io/Daily-Planner/"
  },
  {
    "name": "Password Generator",
    "image": "password-generator.png",
    "project": "password-generator",
    "location": "https://jeminick.github.io/password-generator/"
  }
]

function Projects() {
  return (
    <div>
      <div className="container portfolio-container">
        <h1 className="title">Full-Stack Projects</h1>
        <div className="row">
          <PortfolioCard
            name={aProjects[0].name}
            image={project0image}
            project={aProjects[0].project}
            location={aProjects[0].location}
          />
          <PortfolioCard
            name={aProjects[1].name}
            image={project1image}
            project={aProjects[1].project}
            location={aProjects[1].location}
          />
          <PortfolioCard
            name={aProjects[2].name}
            image={project2image}
            project={aProjects[2].project}
            location={aProjects[2].location}
          />
          <PortfolioCard
            name={aProjects[3].name}
            image={project3image}
            project={aProjects[3].project}
            location={aProjects[3].location}
          />
          <PortfolioCard
            name={aProjects[4].name}
            image={project4image}
            project={aProjects[4].project}
            location={aProjects[4].location}
          />
          <PortfolioCard
            name={aProjects[5].name}
            image={project5image}
            project={aProjects[5].project}
            location={aProjects[5].location}
          />
        </div>
      </div>
    </div >
  );
}

export default Projects;
