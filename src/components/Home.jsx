import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from './Footer.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={2}></Col>
          <Col xs={12} md={8}>
            <p>Home</p>
            <Footer />
          </Col>
          <Col md={2}></Col>
        </Row>
      </div>
    );
  }
}

module.exports = Home;
