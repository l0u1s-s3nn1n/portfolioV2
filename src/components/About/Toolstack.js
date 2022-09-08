import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiGimp,
  SiFigma,
  SiCanva,
  SiGithub,
  SiGitkraken,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
     <SiVisualstudiocode /><p style={{ fontSize: "0.25em"}}>VisualStudioCode</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGithub /><p style={{ fontSize: "0.25em"}}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGitkraken /><p style={{ fontSize: "0.25em"}}>GitKraken</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman /><p style={{ fontSize: "0.25em"}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVercel /><p style={{ fontSize: "0.25em"}}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiHeroku /><p style={{ fontSize: "0.25em"}}>Heroku</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGimp /><p style={{ fontSize: "0.25em"}}>GIMP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFigma /><p style={{ fontSize: "0.25em"}}>Figma</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCanva /><p style={{ fontSize: "0.25em"}}>Canva</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
