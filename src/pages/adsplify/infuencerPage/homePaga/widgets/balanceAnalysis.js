import React, { Component } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, Button } from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';

class RevenueAnalytics extends Component {
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
      colors: ['#789BDC', '#1cbb8c'],
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
        <Card>
          <CardBody>
            <div className="float-right d-none d-md-inline-block">
              <ButtonGroup className="mb-2">
                <Button size="sm" color="light" type="button">
                  Today
                </Button>
                <Button size="sm" color="light" active type="button">
                  Weekly
                </Button>
                <Button size="sm" color="light" type="button">
                  Monthly
                </Button>
              </ButtonGroup>
            </div>
            <div className="d-inline-flex">
              <h5 className="mr-2">$12,253</h5>
              <div className="text-success">
                <i className="mdi mdi-menu-up font-size-14"> </i>2.2 %
              </div>
            </div>
            <p className="text-muted text-truncate mb-0">This month</p>
            <div>
              <div id="line-column-chart" className="apex-charts" dir="ltr">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  height="300"
                />
              </div>
            </div>
          </CardBody>

         </Card>
      </React.Fragment>
    );
  }
}

export default RevenueAnalytics;
