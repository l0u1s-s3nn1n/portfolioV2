import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiWordpress,
  DiSass,
  DiBootstrap,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiJson,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
         <DiHtml5 /><p style={{ fontSize: "0.25em"}}>HMTL5</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 /><p style={{ fontSize: "0.25em"}}>CSS3</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiSass/><p style={{ fontSize: "0.25em"}}>Sass</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap /><p style={{ fontSize: "0.25em"}}>Bootstrap</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiWordpress /><p style={{ fontSize: "0.25em"}}>WordPress</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 /><p style={{ fontSize: "0.25em"}}>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs /><p style={{ fontSize: "0.25em"}}>NodeJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiExpress /><p style={{ fontSize: "0.25em"}}>ExpressJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiReact /><p style={{ fontSize: "0.25em"}}>ReactJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiMongodb /><p style={{ fontSize: "0.25em"}}>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiNextdotjs /><p style={{ fontSize: "0.25em"}}>NextJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiFirebase /><p style={{ fontSize: "0.25em"}}>Firebase</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <SiJson /><p style={{ fontSize: "0.25em"}}>JSON</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
