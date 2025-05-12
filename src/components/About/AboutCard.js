import React from "react";
import Card from "react-bootstrap/Card";
import { HiOutlineCheck } from "react-icons/hi";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a passionate and motivated individual who thrives on exploring diverse interests beyond my professional pursuits.
            My love for the outdoors fuels a deep appreciation for fishing, travel,
            and discovering new places. I also have a strong interest in the culinary arts,
            whether experimenting with recipes in the kitchen or exploring new cuisines.
            In my leisure time, I enjoy gaming and engaging in activities that promote
            balance and well-being. These personal interests not only enrich my life but also inspire creativity and focus in my work.
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
