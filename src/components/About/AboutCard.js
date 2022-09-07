import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m'appelle <span className="purple">Louis LE BAIL. </span>
            J'habite à <span className="purple"> Quimper, dans le Finistère.</span>
            <br />J'ai 32 ans et j'ai obtenu mon diplôme d'intégrateur/développeur en 2022 (bac+2/certification de niveau 5) web avec OpenClassRooms.
            <br />
            <br />
            Curieux de nature, voici les autres sujets qui me passionnent en ce moment :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cuisiner, tester de nouvelles recettes, faire de bon petits plats.
            </li>
            <li className="about-activity">
              <ImPointRight /> Le Web3 et la technologie blockchain. 
            </li>
            <li className="about-activity">
              <ImPointRight /> Profiter des beaux paysages bretons lors de longues ballades.
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
