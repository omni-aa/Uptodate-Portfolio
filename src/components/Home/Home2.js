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
              My name is Aidan, and I am a junior web developer based in Florida with a strong ambition to grow into a well-rounded,
              full-stack developer. I am passionate about building seamless, efficient, and user-centric web applications,
              with a focus on both front-end design and back-end functionality. Dedicated to continuous learning,
              I strive to expand my skill set and take on projects that challenge me to deliver complete, scalable web solutions.
              <br />
              <br />I am proficient in a range of programming languages and technologies, including
              <i>
                <b className="purple"> HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Python, and MySQL</b>
              </i>
              <br />
              <br />
              I continually seek to expand my toolkit to stay current with industry trends and best practices &nbsp;
              <i>
                <b className="purple">React and Next.js for the front end</b>  focus on creating robust and scalable back-end systems using
                <b className="purple"> MySQL, MongoDB, or CockroachDB</b> for data storage, while utilizing
                <b className="purple">Python and FastAPI<b/> {" "}to develop efficient, well-documented APIs
                </b>
              </i>
              <br />
              <br />

              <p className="">
                Using these skills, I have developed a variety of websites and custom components tailored to meet specific user needs.{" "}
                <i>
                  Beyond coding, I place a strong emphasis on efficient workflow and maintainable design systems.{" "}
                  I regularly leverage modern component libraries such as{" "}
                  <b className="text-purple-500">Shadcn/UI</b>,{" "}
                  <b className="text-purple-500">Aceternity</b>, and{" "}
                  <b className="text-purple-500">Material UI</b>{" "}
                  to build and style responsive, accessible, and visually engaging user interfaces.
                </i>
              </p>
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
