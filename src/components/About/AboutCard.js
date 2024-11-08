import React from "react";
import Card from "react-bootstrap/Card";
import { HiOutlineCheck } from "react-icons/hi";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Aidan </span>I am an enthusiastic and driven individual who finds joy in exploring a variety of interests outside of my professional work.
            I have a passion for fishing and the great outdoors, which inspires a love for travel and discovering new places.
            I also appreciate the culinary world, whether it's trying new foods or cooking my own creations. In my downtime,
            I enjoy gaming and engaging in activities that bring balance and peace to my life.
            Apart from coding, here are some characteristics about me
          </p>
          <ul>
            <li className="about-activity">
              <b>⭐ Enthusiastic</b>
            </li>
            <li className="about-activity">
              <b>⭐ Resourceful</b>
            </li>
            <li className="about-activity">
              <b>⭐ Problem Solver</b>
            </li>
            <li className="about-activity">
              <b>⭐ Thinker of outside the box 😃</b>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Programming isn't about what you know; it's about what you can figure out"{" "}
          </p>
          <footer className="blockquote-footer">Chris Pine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
