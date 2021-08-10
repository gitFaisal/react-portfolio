import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I am <span className="purple">Faisal Malik </span>
            from <span className="purple"> New York City.</span>
            <br />I am a Fullstack Engineer pursuing a career in tech that will 
            keep me entertained with endless problems to solve and give me the 
            satisfaction of making peoples lives better!
            <br />
            <br />
            Apart from coding, I have a degree in Biology and a deep love for Science
            because it has opened my eyes to the beautiful natural world we live in.
            <br />
            I also enjoy:
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> The Great Outdoors
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

      
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
