import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Footer from "../Footer";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "black" }}>
              A little about who I am!
            </h1>
            <p className="home-about-body" style={{ color: "black" }}>
              I am a self-taught developer with a hunger to learn more each day!
              <br />
              <br />
              My main programming languages are:
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building awesome responsive websites
              using the <b className="purple">React/Django frameworks</b>, data
              analytics using{" "}
              <b className="purple">Python's Pandas/Jupyter Notebook</b>.
              <br />
              <br />I have always had a passion for drawing. It allows me to
              take a image endlessly floating in my head and put it to rest on
              paper. Programming also allows me to take ideas and make them come
              to life, and my skills in doing so are always leveling up!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p style={{ color: "black" }}>Feel free to connect with me!</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gitFaisal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{ height: "20px" }} />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/faisal-malik-93ab29167/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn style={{ height: "30px" }} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
