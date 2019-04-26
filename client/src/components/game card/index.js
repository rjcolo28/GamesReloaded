import React from "react";
import "./style.css";

function Card(props) {
  return (
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={props.image} alt={props.title}></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-action">
              <a href="http://www.freetimelearning.com"  className="btn blue">Free Time Learn</a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Free Time Learning<i className="material-icons right">close</i></span>
              <p>{props.summary}</p>
            </div>
          </div>
        </div>
  )
}

export default Card;
