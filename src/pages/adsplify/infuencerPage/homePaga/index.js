import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Widget from './widgets';
import Analysis from './widgets/balanceAnalysis';
import PaymentFeed from './widgets/paymentFeed';
import Campaign from './widgets/latestCampaign';
const InfluencerProfile = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Widget />
          <Row>
            <Col sm={6}>
              <Analysis />
            </Col>
            <Col sm={6}>
              <PaymentFeed />
            </Col>
            <Col xs={12}>
              <Campaign />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default InfluencerProfile;
