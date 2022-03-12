import React, { Component } from 'react';
import {
  Row,
  Label,
  Input,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { Us, Gb, Fr, Ng } from 'react-flags-select';
//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';
import UserCard from '../../components/Common/userCard';

import img3 from '../../assets/images/asset-1.jpg';
import igIcon from '../../assets/images/icons8-instagram-48.png';
class Instagram extends Component {
  render() {
    return (
      <React.Fragment>
        <div xs={12}>
          <button type="button" class="btn btn-outline-light float-right">
            View All<i class="ri-send-plane-2-line"></i>
          </button>
          <div>
            <h1 className="card-title">Instagram </h1>
            {/* <footer className="blockquote-footer font-size-12" /> */}
            <p className="card-title-desc">
              Hire influencers by categories on all platforms.
            </p>
          </div>
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
