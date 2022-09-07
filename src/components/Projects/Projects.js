import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={chatify}
              isBlog={false}
              title="Reservia"
              description="Second projet du parcours Développeur web chez OpenClassrooms.Intégration d'une page en HTML et CSS moderne et responsive"
              ghLink="https://github.com/l0u1s-s3nn1n/LouisLeBail_2_25072021"
              demoLink="https://l0u1s-s3nn1n.github.io/LouisLeBail_2_25072021/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={bitsOfCode}
              isBlog={false}
              title="Ohmyfood!"
              description="Troisième projet du parcours développeur web chez OpenClassrooms. L'objectif d'intégrer puis de dynamiser une page web avec des animations CSS en utilisant le préprocesseur Sass"
              ghLink="https://github.com/l0u1s-s3nn1n/LouisLebail_3_19082021/"
              demoLink="https://github.com/l0u1s-s3nn1n/LouisLebail_3_19082021/deployments/activity_log?environment=github-pages"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="La Chouette Agence"
              description="Quatrième projet de la formation OpenClassRooms développeur web : Optimisez un site web existant (SEO)"
              ghLink="https://github.com/l0u1s-s3nn1n/P4-Openclassrooms"
              demoLink="https://l0u1s-s3nn1n.github.io/P4-Openclassrooms/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
