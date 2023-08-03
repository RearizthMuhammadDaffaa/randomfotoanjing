import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col >
          <h1 className="title-header">Random Foto Anjing</h1>
        </Col>
      </Row>
      <Row>
      <Col>
          <nav className="header-nav">
            <Link to="/">Random Image</Link>
            <Link to="breeds-list">Browse Breed List</Link>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
