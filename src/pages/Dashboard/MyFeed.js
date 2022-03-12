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
} from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';

class MyFeed extends Component {
  state = {
    series: [
      {
        name: '2020',
        type: 'column',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
      {
        name: '2019',
        type: 'line',
        data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 3],
        curve: 'smooth',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
        },
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },
      colors: ['#5664d2', '#1cbb8c'],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  };
  render() {
    return (
      <React.Fragment>
        <Col xl={6}>
          <div
            className="btn-group btn-group-toggle float-right"
            data-toggle="buttons"
          >
            <Label
              className={
                this.state.radio1 ? 'btn btn-info active' : 'btn btn-light'
              }
            >
              <Input
                type="radio"
                name="options"
                id="option1"
                defaultChecked
                onClick={() =>
                  this.setState({
                    radio1: true,
                    radio2: false,
                    radio3: false,
                  })
                }
              />{' '}
              My Feed
            </Label>

            <Label
              className={
                this.state.radio2 ? 'btn btn-info active' : 'btn btn-light'
              }
            >
              <Input
                type="radio"
                name="options"
                id="option1"
                onClick={() =>
                  this.setState({
                    radio1: false,
                    radio2: true,
                    radio3: false,
                  })
                }
              />{' '}
              Saved Influencer
            </Label>

            <Label
              className={
                this.state.radio3 ? 'btn btn-info active' : 'btn btn-light'
              }
            >
              <Input
                type="radio"
                name="options"
                id="option1"
                onClick={() =>
                  this.setState({
                    radio1: false,
                    radio2: false,
                    radio3: true,
                  })
                }
              />{' '}
              News Feed
            </Label>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default MyFeed;
