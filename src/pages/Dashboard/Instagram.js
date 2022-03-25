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
import { Link } from 'react-router-dom';
import './dashboard.scss';
import UserCard from '../../components/Common/userCard';

// import img3 from '../../assets/images/asset-1.jpg';
// import igIcon from '../../assets/images/icons8-instagram-48.png';
class Instagram extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="card-title mt-3 mb-0">{this.props.title} </h1>
            {/* <footer className="blockquote-footer font-size-12" /> */}
            <p className="card-title-desc mb-1 d-none d-sm-block font-size-12">
              {this.props.description}
            </p>
          </div>
          <Link to="/categories" type="button" className="text-dark">
            View All
            <i class="ml-2 p-1 bg-primary text-white rounded fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="listing-row">
          {this.props.data.map((data, index) => (
            <UserCard key={index} data={index} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Instagram;
