import React, { Component } from 'react';
import {
  Row,
  Label,
  Input,
  Col,
  Card,
  CardBody,
  ButtonGroup,
  Button,
  CardText,
} from 'reactstrap';

import { Avatar, Chip } from '@material-ui/core';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';
import avatar2 from '../../assets/images/users/avatar-2.jpg';

const categories = [
  'Fashion',
  'Music',
  'Dance',
  'Street',
  'Music',
  'LifeStyle',
  'Food',
  'Blogging',
  'Entertainment',
  'Technology',
  'Model',
];
class Categories extends Component {
  render() {
    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <div>
            <h1 className="card-title mt-3">Categories </h1>
            {/* <footer className="blockquote-footer font-size-12" /> */}
            <p className="card-title-desc mb-1 d-none d-sm-block">
              Hire influencers by categories on all platforms.
            </p>
          </div>{' '}
          <button type="button" class="btn btn-outline-light">
            View All<i class="ri-send-plane-2-line"></i>
          </button>
        </div>

        <div className="w-100">
          <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
            {categories.map((data) => (
              <Chip
                key={data}
                className="mr-4"
                avatar={<Avatar alt="Natacha" src={avatar2} />}
                label={data}
                variant="outlined"
                color="warning"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
