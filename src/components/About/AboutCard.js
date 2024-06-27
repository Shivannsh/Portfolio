import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivansh Gupta </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            <br/>
            I am currently pursuing my B.Tech in Biotechnology from Indian Institue of Technology Delhi (IIT-DELHI).
            <br />
          <br />
            Figuring out how to contribute to Open Source projects related to ZK-Vms,Zk-Email,Zk-p2p.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
            "Innovate, iterate, and inspire - harnessing the power of Web3 to build a decentralized future."{" "}
          </p>
          <footer className="blockquote-footer">Shivansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
