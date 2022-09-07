import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PRÉSENTATION<span className="purple"></span>
            </h1>
            <p className="home-about-body">
              Après 8 ans de bons et loyaux services en tant que <b className="purple">chef-cuisinier</b>,
              <br />
              j’ai décidé de raccrocher le tablier pour me consacrer à une autre de mes passions : <b className="purple">la programmation</b>.
              <br />
              <br />
              Depuis l’adolescence et l’arrivée d’internet à la maison 
              j’ai toujours « bidouillé » sur mes différents PC, je suis un peu le nerd de la famille à qui on demande un coup de pouce quand on rencontre une problème.
              <br />
              <br />
              J’avais depuis plusieurs années l’intention de me lancer dans une <b className="purple">reconversion </b> en tant que <b className="purple">développeur web</b>.
              <i>
              </i>
              <br />
              <br />
              J’ai pu <b className="purple">développer des compétences</b> : 
              <br />
              <br />
              👉 <b className="purple">FRONT-END</b> :
              <br /> 
              <br />
              - HTML5,CSS3 
              <br />
              - JavaScript(ReactJS) 
              <br />
              - CMS WordPress et ses nombreux plugins
              <br />
              <br />
              👉 <b className="purple">BACK-END</b> :
              <br />
              <br />
              - NodesJS(ExpressJS)
              <br />
              - Bases de données 
              <br />
              - SQL/NoSQL (SQLite/MongoDB)
              <br />
              - JSON
              <br />
              <br />
              J’aime construire des <b className="purple">sites/applications web modernes au design soigné</b>.
              <br />
              <br />
              <b className="purple">Créatif</b>, j’aime laissé <b className="purple">libre cours à mon imagination</b> pour mettre en forme mes différents projets.
              <br />
              En <b className="purple">veille constante</b>, je suis en ce moment en train de me former sur <b className="purple">ThreeJS</b> 
              <br />car j’adore le <b className="purple">rendu 3D</b> sur les sites/applications web.
              <br />
              <br />
              Mon but cette année est de concrétiser mes objectifs, de <b className="purple">trouver un poste en tant que développeur FRONT-END </b>
              afin de pouvoir travailler sur des <b className="purple">projets professionnels, développer mes compétences, travailler en équipe</b>.

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
            <h1>MES RÉSEAUX SOCIAUX</h1>
            <p>
               <span className="purple">Contactez-moi</span>
            </p>
            <ul className="home-about-social-links">
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
              <li className="social-icons">
                <a
                  href="https://twitter.com/loowi_D3V"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/louis-le-bail/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
