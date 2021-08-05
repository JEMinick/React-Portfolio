import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      {/* <p>James E. Minick</p> */}
      <div className="footer">
        <a href={props.fburl} alt="facebook url" className="footer-icons" target="blank"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com/EdofSD" alt="twitter url" className="footer-icons" target="blank"><i className="fa fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/james-minick-sandiego/" alt="linkedin url" className="footer-icons" target="blank"><i className="fa fa-linkedin"></i></a>
        <a href="https://github.com/JEMinick?tab=repositories/" alt="Github url" className="footer-icons" target="blank"> <i className="fa fa-github"></i> </a>
      </div>
    </footer>
  );
}

export default Footer;
