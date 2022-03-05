import React, { Component } from 'react';
import { Row, Label, Input, Col, Card, CardBody, ButtonGroup, Button, CardText } from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import "./dashboard.scss";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

class Categories extends Component {

    render() {
        return (
            <React.Fragment>

                <Col xl={12}>
                    <Row>
                        <h1 className="card-title">Categories </h1>
                        <footer className="blockquote-footer font-size-12" />
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <p className="card-title-desc">Hire influencers by categories on all platforms.</p>
                        </Col>
                        <Col xl={6}>
                        <button type="button" class="btn btn-outline-light">View All<i class="ri-send-plane-2-line"></i></button>
                        
                        </Col>
                    </Row>

                    <div className="button-items">
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Fashion
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Music
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Dance
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Street
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Fashion
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Music
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Dance
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Fashion
                        </Button>
                        <Button
                            color="fashion"
                            className="btn-rounded waves-effect mr-1"
                        >
                            <img className="avatar-sm mr-3 rounded-circle" src={avatar2} alt="Nazox" />
                            Music
                        </Button>
                    </div>

                </Col>
            </React.Fragment>
        );
    }
}

export default Categories;
