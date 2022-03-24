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
    this.state = {};
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
                            <i className="ri-lock-2-line auti-custom-input-icon text-secondary"></i>
                            <Label htmlFor="currentPassword">
                              Current Password
                            </Label>
                            <AvField
                              name="password"
                              value={this.state.password}
                              type="password"
                              className="form-control"
                              id="currentPassword"
                              placeholder="Enter password"
                            />
                          </FormGroup>

                          <hr />

                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className="ri-lock-2-line auti-custom-input-icon text-secondary"></i>
                            <Label htmlFor="newPassword">New Password</Label>
                            <AvField
                              name="newPassword"
                              value={this.state.password}
                              type="password"
                              className="form-control"
                              id="newPassword"
                              placeholder="Enter new password"
                            />
                          </FormGroup>

                          <FormGroup className="auth-form-group-custom mb-4">
                            <i className="ri-lock-2-line auti-custom-input-icon text-secondary"></i>
                            <Label htmlFor="confirmPassword">
                              Repeat New Password
                            </Label>
                            <AvField
                              name="confirmPassword"
                              value={this.state.password}
                              type="password"
                              className="form-control"
                              id="confirmPassword"
                              placeholder="confirm password"
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
