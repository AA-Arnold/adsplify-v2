import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Alert,
  Container,
  Label,
  FormGroup,
} from 'reactstrap';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

// action
import {
  registerUser,
  registerUserFailed,
  apiError,
} from '../../../../store/actions';

// Redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import images
import logodark from '../../../../assets/images/adLogo.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      phone_no: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
    this.props.registerUser(values);
  }

  componentDidMount() {
    this.props.registerUserFailed('');
    this.props.apiError('');
    document.body.classList.add('auth-body-bg');
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
            <Row className="no-gutters">
              <Col lg={6}>
                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                  <div className="w-100">
                    <Row className="justify-content-center">
                      <Col lg={8}>
                        <div>
                          <div className="text-left">
                            <div>
                              <Link to="#" className="logo">
                                <img src={logodark} height="25" alt="logo" />
                              </Link>
                            </div>

                            <h4 className="font-size-18 mt-2">
                              Join
                              <span className="text-primary"> Adsplify </span>
                            </h4>
                            {/* <p className="text-muted">
                              Get your free Nazox account now.
                            </p> */}
                          </div>

                          {this.props.user && (
                            <Alert color="success">
                              Registration Done Successfully.
                            </Alert>
                          )}

                          {this.props.registrationError && (
                            <Alert color="danger">
                              {this.props.registrationError}
                            </Alert>
                          )}

                          <div className="p-2 mt-3">
                            <AvForm
                              onValidSubmit={this.handleSubmit}
                              className="form-horizontal"
                            >
                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-2-line auti-custom-input-icon text-muted"></i>
                                <Label htmlFor="username">Full Name</Label>
                                <AvField
                                  name="username"
                                  value={this.state.username}
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  placeholder="Enter username"
                                />
                              </FormGroup>

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-mail-line auti-custom-input-icon text-muted"></i>
                                <Label htmlFor="useremail">Email</Label>
                                <AvField
                                  name="email"
                                  value={this.state.email}
                                  validate={{ email: true, required: true }}
                                  type="email"
                                  className="form-control"
                                  id="useremail"
                                  placeholder="Enter email"
                                />
                              </FormGroup>

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-user-2-line auti-custom-input-icon text-muted"></i>
                                <Label htmlFor="phone_no">Phone No</Label>
                                <AvField
                                  name="phone_no"
                                  value={this.state.phone_no}
                                  type="tel"
                                  className="form-control"
                                  id="phone_no"
                                  placeholder="Enter phone_no"
                                />
                              </FormGroup>

                              <FormGroup className="auth-form-group-custom mb-4">
                                <i className="ri-lock-2-line auti-custom-input-icon text-muted"></i>
                                <Label htmlFor="userpassword">Password</Label>
                                <AvField
                                  name="password"
                                  value={this.state.password}
                                  type="password"
                                  className="form-control"
                                  id="userpassword"
                                  placeholder="Enter password"
                                />
                              </FormGroup>

                              <div className="mt-4 text-center">
                                <p className="mb-2">Register As:</p>
                              </div>

                              <Row>
                                <Col md={6}>
                                  <Button
                                    color="primary"
                                    className="w-100 waves-effect waves-light"
                                    type="submit"
                                  >
                                    {this.props.loading
                                      ? 'Loading ...'
                                      : 'Creater'}
                                  </Button>
                                </Col>

                                <Col md={6}>
                                  <Button
                                    color="primary"
                                    className="w-100 waves-effect waves-light"
                                    type="submit"
                                  >
                                    {this.props.loading
                                      ? 'Loading ...'
                                      : 'Influencer'}
                                  </Button>
                                </Col>
                              </Row>

                              <div className="mt-4 text-center">
                                <p className="mb-0">
                                  By registering you agree to the Adsplify{' '}
                                  <Link to="#" className="text-primary">
                                    Terms of Use
                                  </Link>
                                </p>
                              </div>
                            </AvForm>
                          </div>

                          <div className="text-center mt-2">
                            <Button
                              color="primary"
                              className="w-100 waves-effect waves-light"
                              type="submit"
                            >
                              {this.props.loading ? 'Loading ...' : 'Sign Up'}
                            </Button>
                          </div>

                          <div className="mt-5 text-center">
                            <p>
                              Already have an account ?{' '}
                              <Link
                                to="/login"
                                className="font-weight-medium text-primary"
                              >
                                {' '}
                                Login
                              </Link>{' '}
                            </p>
                            <p>© 2022 Adsplify</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="authentication-bg">
                  {/* <div className="bg-overlay"></div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register);
