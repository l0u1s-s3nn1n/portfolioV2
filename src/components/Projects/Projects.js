import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {AiFillGithub } from "react-icons/ai";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Cette page est <strong className="purple">Cours de construction </strong>
        </h1>
        <Row>
          <Col md={12} className="home-about-social">
            <h2 style={{ fontSize: "1em"}}v>En attendant la version finale vous pouvez consulter mes projets sur Github 👇 </h2>
              <li className="social-icons">
                <a
                  href="https://github.com/l0u1s-S3nn1n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={chatify}
              isBlog={false}
              title="Reservia"
              description="Second projet du parcours Développeur web chez OpenClassrooms : Intégration d'une page en HTML et CSS moderne et responsive"
              ghLink="https://github.com/l0u1s-s3nn1n/LouisLeBail_2_25072021"
              demoLink="https://l0u1s-s3nn1n.github.io/LouisLeBail_2_25072021/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={bitsOfCode}
              isBlog={false}
              title="Ohmyfood!"
              description="Troisième projet du parcours développeur web chez OpenClassrooms. Intégrer une page web avec des animations CSS(Sass)"
              ghLink="https://github.com/l0u1s-s3nn1n/LouisLebail_3_19082021/"
              demoLink="https://l0u1s-s3nn1n.github.io/LouisLebail_3_19082021/"
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

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="Kanap"
              description="Cinquième projet de la formation OpenClassRooms développeur web : Optimisez un site web existant (SEO)"
              ghLink="https://github.com/l0u1s-s3nn1n/P4-Openclassrooms"
              //demoLink="https://l0u1s-s3nn1n.github.io/P4-Openclassrooms/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="Piiquante"
              description="Sixième projet de la formation OpenClassRooms développeur web : Créer une API sécurisée."
              ghLink="https://github.com/l0u1s-s3nn1n/P6-Openclassrooms"
              //demoLink="https://l0u1s-s3nn1n.github.io/P4-Openclassrooms/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="Groupomania"
              description="Dernier projet de la formation OpenClassRooms développeur web : Créer un réseau social d'entreprise."
              ghLink="https://github.com/l0u1s-s3nn1n/OpenClassRomms---Projet-7---Groupomania"
              //demoLink="https://l0u1s-s3nn1n.github.io/P4-Openclassrooms/"              
            />
          </Col>

         

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
