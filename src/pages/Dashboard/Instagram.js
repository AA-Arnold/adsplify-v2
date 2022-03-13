import React, { Component } from 'react';
import {
  Row,
  // Label,
  // Input,
  // Col,
  // Card,
  // CardBody,
  // CardImg,
  // CardText,
  // CardImgOverlay,
  // CardTitle,
} from 'reactstrap';
import { Us, Gb, Fr, Ng } from 'react-flags-select';
//Import Charts
// import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';
import UserCard from '../../components/Common/userCard';

// import img3 from '../../assets/images/asset-1.jpg';
// import igIcon from '../../assets/images/icons8-instagram-48.png';
class Instagram extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="card-title mt-3">{this.props.title} </h1>
            {/* <footer className="blockquote-footer font-size-12" /> */}
            <p className="card-title-desc mb-1 d-none d-sm-block">
              {this.props.description}
            </p>
          </div>{' '}
          <button type="button" class="btn btn-outline-light">
            View All<i class="ri-send-plane-2-line"></i>
          </button>
        </div>
        <Row>
          {[1, 2, 3, 4].map((data) => (
            <UserCard key={data} />
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default Instagram;
