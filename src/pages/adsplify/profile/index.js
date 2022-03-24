import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
} from 'reactstrap';
import profile from '../../../assets/images/adsProfile/asset-2.png';

import { Chip } from '@material-ui/core';
import { Ng } from 'react-flags-select';

import BasicForm from './BasicForm';
import SecurityForm from './SecurityForm';

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
      showBasicForm: true,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col md={4}>
                <Card>
                  <CardBody>
                    <div text-center>
                      <div className="mb-2 text-center">
                        <img
                          src={profile}
                          className="avatar-lg rounded-circle"
                        />
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
                      <p className="font-size-12 text-center">
                        The Kind of blog nonume airpod tempor individual
                      </p>
                      <div className="text-center mb-3">
                        <i className="ri-map-pin-line" />
                        <Ng className="mb-1 ml-1" /> | Lagos
                      </div>
                      <div className="row justify-content-around">
                        <Card className="shadow-lg col-4 p-0">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-center font-size-20"
                            >
                              5
                            </CardTitle>
                          </CardBody>
                          <CardFooter className="text-white text-center bg-primary">
                            Projects
                          </CardFooter>
                        </Card>

                        <Card className="shadow-lg col-4 p-0">
                          <CardBody>
                            <CardTitle
                              tag="h5"
                              className="text-center font-size-20"
                            >
                              9
                            </CardTitle>
                          </CardBody>
                          <CardFooter className="text-white text-center bg-primary">
                            Campaign
                          </CardFooter>
                        </Card>
                      </div>
                      <div className="mt-3 text-center">
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
                  </CardBody>
                </Card>
              </Col>

              <Col md={7}>
                <Card>
                  <CardBody>
                    <div className="bg-white p-1  text-center">
                      <div className="d-inline-block bg-light shadow-lg rounded-pill p-1">
                        <button
                          onClick={() => this.setState({ showBasicForm: true })}
                          className={`mr-1 btn btn-sm btn-${
                            this.state.showBasicForm === true
                              ? 'primary'
                              : 'white'
                          } rounded-pill`}
                        >
                          Basic Info
                        </button>
                        <button
                          onClick={() =>
                            this.setState({ showBasicForm: false })
                          }
                          className={`btn btn-sm btn-${
                            this.state.showBasicForm === false
                              ? 'primary'
                              : 'white'
                          } rounded-pill`}
                        >
                          Security
                        </button>
                      </div>
                    </div>
                    {this.state.showBasicForm ? (
                      <BasicForm />
                    ) : (
                      <SecurityForm />
                    )}
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

export default InfluencerProfile;
