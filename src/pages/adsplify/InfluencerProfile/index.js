import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import profile from '../../../assets/images/adsProfile/asset-2.png';
import igIcon from '../../../assets/images/icons8-instagram-48.png';

import img1 from '../../../assets/images/adsProfile/asset-1.png';
import img2 from '../../../assets/images/adsProfile/asset-2.png';
import img3 from '../../../assets/images/adsProfile/asset-3.png';
import img4 from '../../../assets/images/adsProfile/asset-4.png';

import { Chip } from '@material-ui/core';

import { Ng } from 'react-flags-select';

const categories = [
  'Music',
  'Dance',
  'LifeStyle',
  'Food',
  'Blogging',
  'Entertainment',
];

class InfluencerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: 1,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Row className="m-3">
          <Col md={6}>
            <div text-center>
              <div className="mb-2 text-center">
                <img src={profile} className="avatar-lg rounded-circle" />
              </div>
              <div className="d-flex justify-content-around">
                <div>
                  <button className="btn btn-sm btn-primary rounded-pill mr-2 ">
                    ADD TO CAMPAIGN
                  </button>
                  <button className="btn btn-sm btn-primary rounded-circle">
                    <i className="ri-bookmark-2-fill font-size-10 mt-1" />
                  </button>
                </div>
              </div>
              <h3 className="mt-1 text-center">
                Arizza Kalus
                <span>
                  <i className="ml-2 text-primary ri-checkbox-circle-fill mt-1" />
                </span>
              </h3>
            </div>
            <div>
              <h5 className="font-size-14 text-center">@arizza</h5>
              <p className="font-size-12">
                The Kind of blog nonume airpod tempor individual
              </p>
              <div>
                <i className="ri-map-pin-line" />
                <Ng className="mb-1 ml-1" /> | Lagos
              </div>
              <div className="text-muted mr-3">
                {[1, 2, 3].map((star) => (
                  <span
                    key={star}
                    className="mdi mdi-star font-size-14 text-warning mr-1"
                  ></span>
                ))}
                <span className="mdi mdi-star font-size-14 mr-1"></span>
                (102)
              </div>
              <div className="my-1 mb-1">
                {categories.map((data) => (
                  <Chip
                    key={data}
                    className="mr-2 mb-2"
                    label={`#${data}`}
                    color="warning"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </div>
              <div className="mt-3">
                <h2> About Me </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>

              <div className="mt-3">
                <h2 className="mb-2"> Reviews </h2>
                {[1, 2, 3].map((data) => (
                  <div className="mb-2">
                    <div className="font-weight-bold d-flex">
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mr-2"
                      />
                      John Baba
                      <div className="text-muted ml-2 mr-3">
                        {[1, 2, 3].map((star) => (
                          <span
                            key={star}
                            className="mdi mdi-star font-size-10 text-warning mr-1"
                          ></span>
                        ))}
                        <span className="mdi mdi-star font-size-10 mr-1"></span>
                      </div>
                    </div>
                    <p className="text-muted">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <h2 className="mb-2"> Tags </h2>
                {categories.map((data) => (
                  <Chip
                    key={data}
                    className="mr-2 mb-2"
                    label={`#${data}`}
                    color="warning"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </div>
            </div>
          </Col>

          <Col>
            <div className="mt-3">
              <div className="float-right">
                <i className="ri-code-line font-size-20" />
              </div>
              <h2 className="mb-2"> Galleries </h2>
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
            <div className="mt-4">
              <h2> Rate Card </h2>
              <Card className="d-inline-block">
                <CardBody className="shadow-sm d-flex p-2">
                  <span className="text-center">
                    <i className="d-block  ri-heart-line text-warning" />
                    1234
                  </span>
                  <span className="px-3"> | </span>
                  <span className="text-center">
                    <i className="d-block ri-eye-line text-danger" />
                    1234
                  </span>
                  <span className="px-3"> | </span>
                  <span className="text-center">
                    <i
                      className="d-block ri-user-3-line
                              text-warning"
                    />
                    1234
                  </span>
                  <span className="px-3"> | </span>
                  <span className="text-center">
                    <i
                      className="d-block ri-file-paper-line
                              text-secondary"
                    />
                    1234
                  </span>
                </CardBody>
              </Card>
              <Card
                style={{ borderLeft: '8px solid #125be4' }}
                className="p-1 bg-soft-light"
              >
                <CardBody className="d-flex justify-content-between align-items-center p-1">
                  <div className="mr-2">
                    <h5 className="font-size-14">story Post</h5>
                    <p className="mb-0">
                      1-2 sample story post, with tags and content from above
                    </p>
                  </div>
                  <p>
                    $200{' '}
                    <i className="ml-2 text-primary ri-record-circle-fill" />
                  </p>
                </CardBody>
              </Card>
              {[1, 2, 3].map((data) => (
                <Card
                  style={{ borderLeft: '8px solid #125be4' }}
                  className="p-1 bg-soft-light"
                  key={data}
                >
                  <CardBody className="d-flex justify-content-between align-items-center p-1">
                    <div className="mr-2">
                      <h5 className="font-size-14">Music Promotion</h5>
                      <p className="mb-0">
                        1-2 sample story post, with tags and content from above
                      </p>
                    </div>
                    <p>
                      $200 <i className="ml-2  ri-record-circle-fill" />
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="text-right">
              <button className="btn btn-primary rounded-pill mt-3 px-4">
                Continue
              </button>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default InfluencerProfile;
