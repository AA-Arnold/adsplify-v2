import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';

import igIcon from '../../../../assets/images/icons8-instagram-48.png';

import img1 from '../../../../assets/images/adsProfile/asset-1.png';
import img2 from '../../../../assets/images/adsProfile/asset-2.png';

import { Ng } from 'react-flags-select';

const Index = () => {
  const [feed, setFeed] = useState(1);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row className="justify-content-around">
            <Col md={10}>
              <h2 className="mb-2"> Reviews </h2>
              <div className="d-flex justify-content-around mb-2">
                <div className="bg-white p-1 rounded-pill d-inline-block">
                  <button
                    onClick={() => setFeed(1)}
                    className={`btn btn-sm btn-${
                      feed === 1 ? 'primary' : 'white'
                    } rounded-pill`}
                  >
                    Incoming
                  </button>
                  <button
                    onClick={() => setFeed(2)}
                    className={`btn btn-sm mx-1 btn-${
                      feed === 2 ? 'primary' : 'white'
                    } rounded-pill`}
                  >
                    Pending
                  </button>
                  <button
                    onClick={() => setFeed(3)}
                    className={`btn btn-sm btn-${
                      feed === 3 ? 'primary' : 'white'
                    } rounded-pill`}
                  >
                    Accepted
                  </button>
                </div>
              </div>

              {[1, 2, 3].map((data) => (
                <Card className="mb-2 rounded shadow">
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <div className="font-weight-bold d-flex">
                        <img
                          src={img2}
                          alt="icon"
                          height={18}
                          className="mr-2 rounded-circle"
                        />
                        John Baba
                      </div>
                      <div>
                        <img
                          src={igIcon}
                          alt="icon"
                          height={18}
                          className="mr-2"
                        />
                      </div>
                    </div>
                    <h5 className="card-title font-size-14 my-0 "> First Campaign </h5>
                    <p className="text-muted mb-1 font-size-12">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>

                    <div className="mt-2 font-size-12 font-weight-bold">
                      <span> 10-10-2022 </span>
                      <Ng className="mb-1 ml-1" /> | Lagos
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Index;
