import React, { Component } from 'react';
import {
  Row,
  Label,
  Input,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { Us, Gb, Fr, Ng } from 'react-flags-select';
//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';

import img3 from '../../assets/images/small/img-3.jpg';
class Featured extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xs={12}>
          <button type="button" class="btn btn-outline-light float-right">
            View All<i class="ri-send-plane-2-line"></i>
          </button>
          <div>
            <h1 className="card-title">Featured </h1>
            {/* <footer className="blockquote-footer font-size-12" /> */}
            <p className="card-title-desc">
              Hire influencers by categories on all platforms.
            </p>
          </div>
        </Col>

        <Col xl={12}>
          <Row>
            <Col mg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img3} alt="Skote" />
                <CardImgOverlay>
                  <CardTitle className="text-white float-right  mt-0">
                    <i class="ri-bookmark-2-fill"></i>
                  </CardTitle>
                  <CardTitle className="text-white float-left  mt-0">
                    Falade Timilehin
                  </CardTitle>
                </CardImgOverlay>
                <CardBody>
                  <CardText>
                    <Row>
                      <Col>
                        <Row>
                          <h1 className="card-title">
                            <Us /> | Lagos
                          </h1>
                        </Row>
                      </Col>
                      <Col>
                        <h1 className="card-title">$350</h1>
                      </Col>
                    </Row>

                    <div className="text-muted mr-3">
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star mr-1"></span>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col mg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img3} alt="Skote" />
                <CardImgOverlay>
                  <CardTitle className="text-white float-right  mt-0">
                    <i class="ri-bookmark-2-fill"></i>
                  </CardTitle>
                  <CardTitle className="text-white float-left  mt-0">
                    Falade Timilehin
                  </CardTitle>
                </CardImgOverlay>
                <CardBody>
                  <CardText>
                    <Row>
                      <Col>
                        <Row>
                          <h1 className="card-title">
                            <Gb /> | Lagos
                          </h1>
                        </Row>
                      </Col>
                      <Col>
                        <h1 className="card-title">$350</h1>
                      </Col>
                    </Row>

                    <div className="text-muted mr-3">
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star mr-1"></span>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col mg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img3} alt="Skote" />
                <CardImgOverlay>
                  <CardTitle className="text-white float-right  mt-0">
                    <i class="ri-bookmark-2-fill"></i>
                  </CardTitle>
                  <CardTitle className="text-white float-left  mt-0">
                    Falade Timilehin
                  </CardTitle>
                </CardImgOverlay>
                <CardBody>
                  <CardText>
                    <Row>
                      <Col>
                        <Row>
                          <h1 className="card-title">
                            <Fr /> | Lagos
                          </h1>
                        </Row>
                      </Col>
                      <Col>
                        <h1 className="card-title">$350</h1>
                      </Col>
                    </Row>

                    <div className="text-muted mr-3">
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star mr-1"></span>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col mg={6} xl={3}>
              <Card>
                <CardImg top className="img-fluid" src={img3} alt="Skote" />
                <CardImgOverlay>
                  <CardTitle className="text-white float-right  mt-0">
                    <i class="ri-bookmark-2-fill"></i>
                  </CardTitle>
                  <CardTitle className="text-white float-left  mt-0">
                    Falade Timilehin
                  </CardTitle>
                </CardImgOverlay>
                <CardBody>
                  <CardText>
                    <Row>
                      <Col>
                        <Row>
                          <h1 className="card-title">
                            <Ng /> | Lagos
                          </h1>
                        </Row>
                      </Col>
                      <Col>
                        <h1 className="card-title">$350</h1>
                      </Col>
                    </Row>

                    <div className="text-muted mr-3">
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star text-warning mr-1"></span>
                      <span className="mdi mdi-star mr-1"></span>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </React.Fragment>
    );
  }
}

export default Featured;
