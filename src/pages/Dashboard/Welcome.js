import React, { Component } from 'react';
import {
  Col,
  Card,
  Form,
  Input,
  CardImgOverlay,
  CardImg,
  FormGroup,
} from 'reactstrap';

// import Search from "./search"
// import images
// import img6 from '../../assets/images/banner.svg';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Col>
          <div>
            <div className="mb-2 home-bg rounded">
              <div className="d-flex justify-content-around align-items-center h-100">
                <div className="col-6 text-center">
                  <h1 className="text-white mb-3">
                    Welcome to the Future of Advert
                  </h1>
                  <p className="text-white">
                    Discover the world of adplify influencers and promoters.
                    Find Influencers that you want to work with and create
                    campaign with ease
                  </p>
                  <div>
                    <FormGroup className="search-form-group-custom shadow-sm rounded mb-1 d-inline-block w-50">
                      <i className=" ri-search-line search-custom-input-icon"></i>
                      <input
                        value={this.state.username}
                        type="text"
                        className="form-control p-0 px-2"
                        placeholder="location, categories aand more..."
                      />
                    </FormGroup>
                    <span
                      style={{ height: '40px', padding: '0.6rem' }}
                      className="bg-white ml-2 shadow-sm rounded"
                    >
                      <i className="ri-shape-2-line" />
                    </span>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="d-flex col-7  justify-content-between text-white">
                      <span className="font-size-12">Active Filter</span>
                      <span className="badge badge-soft-primary">
                        Clear all
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default Welcome;
