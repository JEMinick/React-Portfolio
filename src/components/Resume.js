import React from "react";
// import PortfolioCard from "./PortfolioCard";
import HomePageProfile from "../assets/HomeProfile.jpg"
import ResumePDF from "../assets/minick_resume.pdf"
import ResumePNG from "../assets/minick_resume.png"

function Resume() {
  return (
    // row row-home
    // display-flex justify-space-between align-center
    <div className="row display-flex justify-space-between align-center">

      <div className="col">
      </div>
      
      <div className="card col-md-4">
        {/* <h1 className="text-center">About</h1> */}
        <div className="about-container">
          <img src={HomePageProfile} alt="home-profile-pic" className="profile-photo mb-3"></img>
        </div>
        <h5 className="text-center mt-2">Experienced Software Developer</h5>
        <h6 className="text-center mt-2">Traditional, Object-oriented, and Full-Stack Web Development</h6>
        <p className="card-text text-center mb-3">
        As an experienced and goal-oriented professional, executives 
        and business owners know they can rely on my ability to provide exceptional service, resources, 
        and methods to meet ever-changing objectives and ensure compliance with all regulatory 
        requirements.
        </p>
        {/* <a href="https://www.linkedin.com/in/james-minick-sandiego" className="ml-5">LinkedIn</a> */}
        {/* <a href="https://github.com/JEMinick" className="ml-5">Github</a> */}
      </div>

      <div className="card col-md-4">
        <div className="about-container">
          <a className="link" href={ResumePDF} target="_blank" rel="noreferrer">  View  <i className="fas fa-file-pdf text-link"></i>  Resume </a>
          <div className="about-container">
            <img src={ResumePNG} alt="personal resume" className="profile-photo mb-3"></img>
          </div>
        </div>
      </div>

      <div className="col">
      </div>

    </div>
  );
}

export default Resume;
