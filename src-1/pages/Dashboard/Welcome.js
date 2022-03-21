import React, { Component } from 'react';
import { Col, Card, Form, Input, CardImgOverlay, CardImg } from 'reactstrap';

// import Search from "./search"
// import images
import img6 from '../../assets/images/banner.svg';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Col>
          <Card>
            <div>
              <CardImg
                className="img-fluid bg-light"
                src={img6}
                alt="future"
                // width="100%"
                height="100%"
              />
            </div>
            <CardImgOverlay className="d-flex justify-content-around align-content-center align-items-center text-center">
              <div>
                <h1 className="text-white mt-0">
                  Welcome to the Future of Adverts
                </h1>
                <p className="text-light">
                  Discover the world of adplify influencers and promoters. Find
                  Influencers that you want to work with <br /> and create
                  campaign with ease.
                </p>
                <div className="d-flex">
                  {/* <Form className="app-search w-75 mr-2">
                    <div className="position-relative">
                      <Input
                        type="text"
                        className="form-control"
                        // placeholder={this.props.t('Search')}
                      />
                      <span className="ri-search-line"></span>
                    </div>
                  </Form> */}
                  {/* <span className="bg-white"> */}
                    {/* <i className="mdi-table-search" /> */}
                  {/* </span> */}
                </div>
                {/* <Search/> */}
              </div>
            </CardImgOverlay>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default Welcome;
