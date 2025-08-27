import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiAmazonwebservices } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { SiMacos } from "react-icons/si";
import { SiRender } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiVercelLine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiAmazonwebservices />
     </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
    </Row>
  );
}

export default Toolstack;
