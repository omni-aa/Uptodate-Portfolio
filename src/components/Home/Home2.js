import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My name is Aidan, a junior web developer based in Florida.
              I am driven by the goal of becoming a well-rounded developer,
              proficient in both front-end and back-end development.
              My passion lies in creating seamless and efficient web solutions,
              and I am committed to expanding my skills to deliver full-stack projects.
              <br />
              <br />I am proficient in a range of programming languages and technologies, including:
              <i>
                <b className="purple"> HTML, Javascript, TypeScript, Python</b>
              </i>
              <br />
              <br />
               i am passionate about building secure and innovative web applications, leveraging frameworks like. &nbsp;
              <i>
                <b className="purple">React and Next.js for the front end</b>  focus on creating robust and scalable back-end systems using
                <b className="purple"> MySQL, MongoDB, or CockroachDB</b> for data storage, while utilizing
                <b className="purple">Python and FastAPI<b/> {" "}to develop efficient, well-documented APIs
                </b>
              </i>
              <br />
              <br />
             <b className="">Using these skills i've built various website not to mention custom components</b>
              <i>
                <b className="">but lets not forget about workflow. </b>
                <b>I leverage a few components libraries such as </b>
                <b className="purple">Shadcn/ui, Aceternity, Material UI</b>{" "}
                <b>to build and style responsive designs </b>
              </i> 
              <i></i>
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
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AidanAli"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
