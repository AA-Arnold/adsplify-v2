import React, { Component } from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
  Form,
  Label,
  FormGroup,
} from 'reactstrap';

import { Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { Ng } from 'react-flags-select';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: 'admin@themesdesign.in', password: '123456' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    // this.props.checkLogin(values, this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        <div className="home-btn d-none d-sm-block">
          <Link to="/">
            <i className="mdi mdi-home-variant h2 text-white"></i>
          </Link>
        </div>

        <div>
          <Row>
            <Col xs={12} md={7}>
              <Card>
                <CardBody>
                  {[1, 2, 3].map((data) => (
                    <Card
                      style={{ borderLeft: '8px solid #125be4' }}
                      className="p-1 bg-soft-light"
                      key={data}
                    >
                      <CardBody className="d-flex justify-content-between align-items-center p-1">
                        <div className="mr-2">
                          <h5 className="font-size-14">Music Promotion</h5>
                          <p className="mb-0 font-size-10 text-muted">
                            1-2 sample story post, with tags and content from
                            above
                          </p>
                        </div>
                        <Form inline>
                          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="price" className="mr-sm-2">
                              ₦
                            </Label>
                            <Input
                              type="number"
                              bsSize="sm"
                              className="form-control "
                            />
                          </FormGroup>
                        </Form>
                      </CardBody>
                    </Card>
                  ))}
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card>
                <CardBody>
                  {[1, 2, 3].map((data) => (
                    <Card
                      style={{ borderLeft: '8px solid #125be4' }}
                      className="p-1 bg-soft-light"
                      key={data}
                    >
                      <CardBody className="d-flex justify-content-between align-items-center p-1">
                        <div className="mr-2">
                          <h5 className="font-size-14">Music Promotion</h5>
                        </div>
                        <p className="mb-0">
                          <i className="ml-2   ri-checkbox-blank-circle-line" />
                        </p>
                      </CardBody>
                    </Card>
                  ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
