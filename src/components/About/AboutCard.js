import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a Graduate in <span className="purple">Telecommunication Engineering </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />My Objective is to Seek a challenging Cloud and Devops Engineer role to leverage
expertise in cloud computing and IT infrastructure for delivering
reliable solutions and contributing to company growth 
            <br />
            <br />
            Apart from coding, some other activities that I love t  o do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abubakar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
