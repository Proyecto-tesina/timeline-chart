import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function SecondaryLink(props) {
  return (
    <Link to={props.to} className="animated-button3 Link SecondaryLink">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.children}
    </Link>
  );
}

export default SecondaryLink;
