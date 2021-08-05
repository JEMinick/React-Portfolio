import React from "react";

function PortfolioCard(props) {
  return (
    <div className="card port-card d-flex justify-content-around">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github:</strong> <a href={props.project} rel="noreferrer" target="_blank">Project Files</a>
          </li>
          <li>
            <strong>Application:</strong> <a href={props.location} rel="noreferrer" target="_blank">Run</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioCard;
