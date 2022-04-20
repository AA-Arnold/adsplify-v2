import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import igIcon from '../../../../assets/images/icons8-instagram-48.png';

import img1 from '../../../../assets/images/adsProfile/asset-1.png';
import img3 from '../../../../assets/images/adsProfile/asset-3.png';
import img4 from '../../../../assets/images/adsProfile/asset-4.png';

class ManageCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: 1,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col md={6}>
                <div>
                  <Card className="mt-3 rounded">
                    <CardBody>
                      <h4 className="mb-5">
                        <img
                          src={igIcon}
                          alt="icon"
                          height={18}
                          className="mr-2"
                        />
                        Music Promotion - John Doe
                      </h4>
                      <div className="mb-3">
                        <div>
                          <span className="float-right">
                            <i className="far fa-copy font-size-16" />
                          </span>
                          <h5 className="card-title"> Caption </h5>
                        </div>
                        <p className="text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>
                      <div>
                        <div>
                          <span className="float-right">
                            <i className="far fa-copy font-size-16" />
                          </span>
                          <h5 className="card-title"> Post Instruction </h5>
                        </div>
                        <p className="text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <span className="font-size-14">
                          <i className=" ri-calendar-todo-line text-primary mr-1 mt-2 pt-2" />
                          <span>22-27-march</span>
                        </span>
                        <span className="font-size-14">
                          <i className=" ri-time-line text-primary mr-1 mt-2 pt-2" />
                          <span>10:10pm</span>
                        </span>
                        <span className="font-size-14">
                          <i className="ri-calendar-check-line mr-1 mt-2 pt-2" />
                          <span className="text-primary">Add to calender</span>
                        </span>
                      </div>

                      <div className="text-center d-sm-block d-none mt-4">
                        <button className="btn btn-outline-primary mt-3 mr-2 px-4">
                          Declined
                        </button>
                        <button className="btn btn-primary mt-3 px-4">
                          Accept
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col>
                <div className="mt-3">
                  <div className="float-right">
                    <i className="ri-download-cloud-line font-size-18 mr-2" />

                    <i className="ri-code-line font-size-18" />
                  </div>
                  <h4 className="mb-2"> Attachments </h4>
                  <Row>
                    <Col sm={4}>
                      <img
                        src={img1}
                        alt="gallery"
                        // width={100%}
                        className="rounded mr-2 mb-2 w-100"
                      />
                    </Col>
                    <Col sm={4}>
                      <img
                        src={img3}
                        alt="gallery"
                        className="rounded mr-2 mb-2 w-100"
                      />
                    </Col>
                    <Col sm={4}>
                      <img
                        src={img4}
                        alt="gallery"
                        className="rounded mr-2 mb-2 w-100"
                      />
                    </Col>
                  </Row>
                </div>
                <div className="text-center d-block d-sm-none">
                  <button className="btn btn-outline-primary mt-3 mr-2 px-4">
                    Declined
                  </button>
                  <button className="btn btn-primary mt-3 px-4">Accept</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default ManageCampaign;
