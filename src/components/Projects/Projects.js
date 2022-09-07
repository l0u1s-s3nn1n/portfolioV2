import React from "react";
import { Container, /*Row, Col*/ } from "react-bootstrap";
//import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Cette page est <strong className="purple">Cours de construction </strong>
        </h1>
        <p style={{ color: "white" }}>
          Consulter mon repo Github 👉<a
                href="https://github.com/louis-s3nn1n"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              > ici </a>👈
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
