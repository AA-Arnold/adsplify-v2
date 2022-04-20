import React, { useState } from 'react';
import { Container, Card, CardBody, Row, Col, Input } from 'reactstrap';
import { AvatarGroup, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import igIcon from '../../../assets/images/icons8-instagram-48.png';

import img1 from '../../../assets/images/adsProfile/asset-1.png';
import img2 from '../../../assets/images/adsProfile/asset-2.png';
import img3 from '../../../assets/images/adsProfile/asset-3.png';

const Campaign = () => {
  const [feed, setFeed] = useState(1);
  return (
    <div className="page-content">
      <Container fluid>
        <div className="mb-2 d-flex justify-content-between align-item-center">
          <h2> My Campaigns </h2>
          <div>
            <div className="bg-white p-1 rounded-pill">
              <button
                onClick={() => setFeed(1)}
                className={`btn btn-sm btn-${
                  feed === 1 ? 'primary' : 'white'
                } rounded-pill`}
              >
                All Campaigns
              </button>
              <button
                onClick={() => setFeed(2)}
                className={`btn btn-sm btn-${
                  feed === 2 ? 'primary' : 'white'
                } rounded-pill`}
              >
                Processing
              </button>
              <button
                onClick={() => setFeed(3)}
                className={`btn btn-sm btn-${
                  feed === 3 ? 'primary' : 'white'
                } rounded-pill`}
              >
                Approved
              </button>
            </div>
          </div>
        </div>
        <Card>
          <CardBody>
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="my-2 col-md-3 col-6">
                  <div className="search-box">
                    <div className="position-relative">
                      <Input
                        type="text"
                        className="form-control rounded"
                        placeholder="Search..."
                      />
                      <i className="mdi mdi-magnify search-icon"></i>
                    </div>
                  </div>
                </div>
                <span>Newest</span>
              </div>
            </div>
            <div>
              {[1, 2, 3, 4].map((item) => (
                <Link to="#" key={item}>
                  <div key={item} className="p-2 bg-light rounded mt-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="font-size-16">
                        <span>My First Post </span>
                      </h5>

                      <span>
                        <i className="ml-2 p-1 bg-primary text-white rounded font-size-12 fas fa-arrow-right"></i>
                      </span>
                    </div>
                    <p className="mb-0 text-muted">
                      {' '}
                      Lorem ipmos don sit enors, const emors ke sers{' '}
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <AvatarGroup max={5}>
                          <Avatar
                            sx={{ width: 24, height: 24 }}
                            alt="Remy Sharp"
                            src={img1}
                          />
                          <Avatar
                            sx={{ width: 24, height: 24 }}
                            alt="Travis Howard"
                            src={img2}
                          />
                          <Avatar
                            sx={{ width: 24, height: 24 }}
                            alt="Cindy Baker"
                            src={img3}
                          />
                        </AvatarGroup>
                      </div>
                      <div>
                        <img
                          src={igIcon}
                          alt="icon"
                          height={18}
                          className="m-2"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Campaign;
