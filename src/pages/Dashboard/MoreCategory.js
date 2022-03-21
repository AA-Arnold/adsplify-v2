import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabPane, TabContent, Form, Input, Table, FormGroup, Label, ButtonGroup, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Images
import img1 from "../../assets/images/product/img-1.png";
import img2 from "../../assets/images/product/img-2.png";
import UserCard from '../../components/Common/userCard';
import CategorySidebar from './CategorySidebar';

class CheckOut extends Component {
 

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>

         
            <Row>
              <Col lg={3}>
                <Card className="checkout-order-summary">
                  <CardBody>
                    
                    <div className="p-3 mb-4">
                      <h3 > Choose Influencer</h3>
                      <CategorySidebar/>
                      {/* <h5 className="font-size-14 mb-0">Order Summary <span className="float-right ml-2">#SK2356</span></h5> */}
                    </div>
                
                  </CardBody>
                </Card>
              </Col>
              <Col lg={9}>

                <Card>
                  <CardBody>
                    <ButtonGroup className="shadow rounded">
                      <Button color="white">Search</Button>
                      <Button color="primary">Saved Influencer</Button>

                    </ButtonGroup>
                    <div className="search-box chat-search-box">
                      <div className="position-relative">
                        <Input type="text" className="form-control" placeholder="Select categories" />
                        <i className="ri-search-line search-icon"></i>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <h1 className="card-title mt-3">Active filter </h1>
                        <h1 className="card-title mt-3">Active filter </h1>
                        {/* <footer className="blockquote-footer font-size-12" /> */}

                      </div>{' '}
                      <h1 className="card-title mt-3">Sort </h1>
                      <h1 className="card-title mt-3">View </h1>
                    </div>
                    <Row>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((data) => (
                        <UserCard key={data} />
                      ))}
                    </Row>
                  </CardBody>
                </Card>
              </Col>

            </Row>

          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckOut;