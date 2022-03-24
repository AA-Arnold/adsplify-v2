import React, { Component } from 'react';

import {
  Row,
  Col,
  Input,
  Button,
  Alert,
  Container,
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
          <Container fluid className="p-0">
            <div className=" mt-4 d-flex align-items-center">
              <div className="w-100">
                <Row className="justify-content-center">
                  <Col lg={12}>
                    <div>
                      <div className="p-2">
                        <AvForm
                          className="form-horizontal"
                          onValidSubmit={this.handleSubmit}
                        >
                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className="ri-user-2-line auti-custom-input-icon text-secondary"></i>
                            <Label htmlFor="username">Full Name</Label>
                            <AvField
                              name="username"
                              value={this.state.username}
                              type="text"
                              className="form-control"
                              id="username"
                              validate={{ email: true, required: true }}
                              placeholder="Enter username"
                            />
                          </FormGroup>

                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className="ri-lock-2-line auti-custom-input-icon text-secondary"></i>
                            <Label htmlFor="email">Email</Label>
                            <AvField
                              name="password"
                              value={this.state.email}
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Enter Email"
                            />
                          </FormGroup>

                          <FormGroup className="auth-form-group-custom mb-4">
                            {/* <i className="ri-lock-2-line auti-custom-input-icon"></i> */}
                            <Ng className="auti-custom-input-icon" />
                            <Label htmlFor="email">Country</Label>

                            <AvField
                              type="select"
                              name="country"
                              className="form-control"
                              label="Country"
                            >
                              <option>Nigeria</option>
                              <option>US</option>
                              <option>Ghana</option>
                              <option>SF</option>
                            </AvField>
                          </FormGroup>

                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className=" ri-phone-line auti-custom-input-icon text-secondary"></i>
                            <Label htmlFor="phone_no">Phone Number</Label>
                            <AvField
                              name="phone_no"
                              value={this.state.phone_no}
                              type="tel"
                              className="form-control"
                              id="phone_no"
                              placeholder="Enter Phone no"
                            />
                          </FormGroup>

                          <div className="mt-4 text-center">
                            <Button
                              color="primary"
                              className="w-md waves-effect waves-light rounded-pill px-4"
                              type="submit"
                            >
                              Save
                            </Button>
                          </div>
                        </AvForm>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
