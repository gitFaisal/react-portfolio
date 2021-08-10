import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cards from "../../Assets/Projects/cardMatching.png";

import editor from "../../Assets/Projects/codeEditor.png";
import levelup from "../../Assets/Projects/levelup.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={levelup}
              isBlog={false}
              title="The Level Up App"
              description="Productivity app that aims to help users keep track of skills they are trying to upgrade. This
              project came from a method I used to keep track of my skills on a white board. The idea is simple but powerful,
              in that each hour that is spent towards studying/learning a skill, you give yourself a point. Every 10 points is a
              level up!"
              link="https://github.com/gitFaisal/levelupFullstack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cards}
              isBlog={false}
              title="Card Matching Game"
              description="Used JavaScript, HTML, and CSS to build a card matching game. The goal behind this game was to spread environmental awareness to protect animals."
              link="https://gitfaisal.github.io/cardMatchingProject/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card"></Col>

          <Col md={4} className="project-card"></Col>

          <Col md={4} className="project-card"></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
