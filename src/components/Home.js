import React from "react";
import HomePageProfile from "../assets/HomeProfile.jpg"

function HomeCard() {
    return (
      <div className="row row-home">
        <div className="col">
        </div>
        <div className="card col-6">
          <h1 className="text-center">About</h1>
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
        <div className="col">
        </div>

        {/* <div className="col-4">
          <div className="card card-home">
            <div className="card-body">
              <h5 className="card-title text-center">Full Stack Web developer</h5>
              <p className="card-text text-center">Experienced and Professional</p>
              <a href="https://www.linkedin.com/in/james-minick-sandiego" className="ml-5">LinkedIn</a>
              <a href="https://github.com/JEMinick" className="ml-5">Github</a>
            </div>
          </div>
        </div> */}

      </div>
    );
}

export default HomeCard;
