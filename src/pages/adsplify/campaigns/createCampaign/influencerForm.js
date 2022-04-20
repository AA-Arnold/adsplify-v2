import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Collapse,
  CardHeader,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// RangeSlider
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

// import UserCard from './influencerCard';
import UserCard from './influencerRowCard';
import CartCardInfo from './cartCard';

const data = [
  './assets/images/adsProfile/asset-1.png',
  './assets/images/adsProfile/asset-2.png',
  './assets/images/adsProfile/asset-3.png',
  './assets/images/adsProfile/asset-4.png',
  './assets/images/adsProfile/asset-1.png',
  './assets/images/adsProfile/asset-2.png',
  './assets/images/adsProfile/asset-3.png',
  './assets/images/adsProfile/asset-4.png',
  './assets/images/adsProfile/asset-1.png',
  './assets/images/adsProfile/asset-2.png',
  './assets/images/adsProfile/asset-3.png',
  './assets/images/adsProfile/asset-4.png',
];

class Influencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: 1,
      electronic: false,
      fashion: true,
      baby: false,
      fitness: false,
      discount: true,
      size: true,
      rating: false,
      modalState: false,
    };
    this.ShowCartHandler = this.ShowCartHandler.bind(this);
  }

  ShowCartHandler() {
    this.setState((prevState) => ({
      modalState: !prevState.modalState,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Row>
            <Col className="d-none d-sm-block" xl={3} lg={4}>
              <Card>
                <CardHeader className="bg-transparent border-bottom">
                  <h5 className="mb-0">Filters By</h5>
                </CardHeader>

                <CardBody className="border-top m-0">
                  <h5 className="font-size-14 mb-3">Categories</h5>
                  <div>
                    <ul className="list-unstyled categories-list mb-0">
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i> All
                          Categories
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i> Music
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i>{' '}
                          Lifestyle
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i> Food
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i>
                          Blogging
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i>
                          Entertainment
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i>
                          Technologies
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i> Dance
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i> Model
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i>
                          Comedy
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="mdi mdi-circle-medium mr-1"></i>
                          Fashion
                        </Link>
                      </li>
                    </ul>
                  </div>
                </CardBody>

                <div className="custom-accordion">
                  <CardBody className="border-top m-0">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link
                          to="#"
                          className="text-dark d-block"
                          onClick={() =>
                            this.setState({ discount: !this.state.discount })
                          }
                        >
                          Price Range{' '}
                          <i
                            className={
                              this.state.discount === true
                                ? 'mdi mdi-minus float-right accor-minus-icon'
                                : 'mdi mdi-plus float-right accor-plus-icon'
                            }
                          ></i>
                        </Link>
                      </h5>

                      <Collapse
                        isOpen={this.state.discount}
                        id="collapseExample1"
                      >
                        <div className="mt-4">
                          <div>
                            <h5 className="font-size-14 mb-4">Price</h5>
                            <br />
                            <Nouislider
                              range={{ min: 0, max: 600 }}
                              tooltips={true}
                              start={[100, 500]}
                              connect
                            />
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </CardBody>

                  <CardBody className="border-top">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link
                          to="#"
                          className="text-dark d-block"
                          onClick={() =>
                            this.setState({ size: !this.state.size })
                          }
                        >
                          Location{' '}
                          <i
                            className={
                              this.state.size === true
                                ? 'mdi mdi-minus float-right accor-minus-icon'
                                : 'mdi mdi-plus float-right accor-plus-icon'
                            }
                          ></i>
                        </Link>
                      </h5>

                      <Collapse isOpen={this.state.size} id="collapseExample2">
                        <div className="mt-4">
                          <FormGroup className="search-form-group-custom shadow-sm rounded mb-1 border border-light">
                            <i className=" ri-search-line search-custom-input-icon font-size-14"></i>
                            <input
                              value={this.state.username}
                              type="text"
                              className="form-control p-0 px-2"
                              placeholder="Search location..."
                            />
                          </FormGroup>
                        </div>
                      </Collapse>
                    </div>
                  </CardBody>
                  <CardBody className="border-top">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link
                          to="#"
                          className="collapsed text-dark d-block"
                          onClick={() =>
                            this.setState({ rating: !this.state.rating })
                          }
                        >
                          Influencer Rating{' '}
                          <i
                            className={
                              this.state.rating === true
                                ? 'mdi mdi-minus float-right accor-minus-icon'
                                : 'mdi mdi-plus float-right accor-plus-icon'
                            }
                          ></i>
                        </Link>
                      </h5>

                      <Collapse
                        isOpen={this.state.rating}
                        id="collapseExample3"
                      >
                        <div className="mt-4">
                          <div className="custom-control custom-radio mt-2">
                            <Input
                              type="radio"
                              id="productratingRadio1"
                              name="productratingRadio1"
                              className="custom-control-input"
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="productratingRadio1"
                            >
                              4 <i className="mdi mdi-star text-warning"></i> &
                              Above
                            </Label>
                          </div>
                          <div className="custom-control custom-radio mt-2">
                            <Input
                              type="radio"
                              id="productratingRadio2"
                              name="productratingRadio1"
                              className="custom-control-input"
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="productratingRadio2"
                            >
                              3 <i className="mdi mdi-star text-warning"></i> &
                              Above
                            </Label>
                          </div>
                          <div className="custom-control custom-radio mt-2">
                            <Input
                              type="radio"
                              id="productratingRadio3"
                              name="productratingRadio1"
                              className="custom-control-input"
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="productratingRadio3"
                            >
                              2 <i className="mdi mdi-star text-warning"></i> &
                              Above
                            </Label>
                          </div>
                          <div className="custom-control custom-radio mt-2">
                            <Input
                              type="radio"
                              id="productratingRadio4"
                              name="productratingRadio1"
                              className="custom-control-input"
                            />
                            <Label
                              className="custom-control-label"
                              htmlFor="productratingRadio4"
                            >
                              1 <i className="mdi mdi-star text-warning"></i>
                            </Label>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Col>
            <Col lg={9} sm={12}>
              <Card>
                <CardBody className="m-0 p-1">
                  <div>
                    <div>
                      <div>
                        <div className="float-right">
                          <span>
                            <i className="ri-layout-masonry-line font-size-22" />
                          </span>
                          <Link to="#" onClick={this.ShowCartHandler}>
                            <span className="mx-2 position-relative">
                              <i className=" ri-shopping-cart-line font-size-22" />
                              <span class="badge badge-primary font-size-10 position-absolute">
                                9
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="bg-white p-1 rounded-pill border border-light shadow d-inline-block">
                        <button
                          onClick={() => this.setState({ feed: 1 })}
                          className={`btn mr-1 btn-sm btn-${
                            this.state.feed === 1 ? 'primary' : 'white'
                          } rounded-pill`}
                        >
                          All Feeds
                        </button>
                        <button
                          onClick={() => this.setState({ feed: 2 })}
                          className={`btn btn-sm btn-${
                            this.state.feed === 2 ? 'primary' : 'white'
                          } rounded-pill`}
                        >
                          Saved Influenncer
                        </button>
                      </div>
                    </div>
                    <div className="my-2">
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

                    <ul className="list-inline mb-3 ecommerce-sortby-list">
                      <li className="list-inline-item d-block">
                        <span className="font-weight-medium font-family-secondary">
                          Active filter:
                        </span>
                      </li>
                      <li className="list-inline-item active ">
                        <Link to="#">
                          <span className="badge badge-primary">Lagos</span>
                        </Link>
                      </li>
                      <li className="list-inline-item ">
                        <Link to="#">
                          <span className="badge badge-primary">
                            Entertainment
                          </span>
                        </Link>
                      </li>
                      <li className="list-inline-item ">
                        <Link to="#">
                          <span className="badge badge-primary">model</span>
                        </Link>
                      </li>
                    </ul>

                    <Row className="no-gutters">
                      {data.map((data, index) => (
                        <UserCard data={index} key={index} />
                      ))}
                    </Row>

                    <Row className="mt-4">
                      <Col sm={6}>
                        <div>
                          <p className="mb-sm-0 mt-2">
                            Page <span className="font-weight-bold">2</span> Of{' '}
                            <span className="font-weight-bold">113</span>
                          </p>
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="float-sm-right">
                          <Pagination className="pagination-rounded mb-sm-0">
                            <PaginationItem disabled>
                              <PaginationLink href="#">
                                <i className="mdi mdi-chevron-left"></i>
                              </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                              <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink hrefo="#">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#">5</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#">
                                <i className="mdi mdi-chevron-right"></i>
                              </PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal
            size="lg"
            isOpen={this.state.modalState}
            toggle={this.ShowCartHandler}
            // scrollable={true}
          >
            <ModalHeader toggle={() => this.setState({ modalState: false })}>
              Added Influencer
            </ModalHeader>
            <ModalBody>
              <CartCardInfo />
            </ModalBody>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Influencer;
