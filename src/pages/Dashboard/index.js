import React, { Component } from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Components
import MiniWidgets from './MiniWidgets';
import RevenueAnalytics from './RevenueAnalytics';
import SalesAnalytics from './SalesAnalytics';
import EarningReports from './EarningReports';
import Sources from './Sources';
import RecentlyActivity from './RecentlyActivity';
import RevenueByLocations from './RevenueByLocations';
import ChatBox from './ChatBox';
import LatestTransactions from './LatestTransactions';
import Welcome from './Welcome';
import MyFeed from './MyFeed';
import Categories from './Categories';
import Instagram from './Instagram';
import TikTok from './TikTok';
import Featured from './Featured';
import Blogs from './Blogs';
import RadioStations from './RadioStations';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'Nazox', link: '#' },
        { title: 'Dashboard', link: '#' },
      ],
      reports: [
        {
          icon: 'ri-stack-line',
          title: 'Number of Sales',
          value: '1452',
          rate: '2.4%',
          desc: 'From previous period',
        },
        {
          icon: 'ri-store-2-line',
          title: 'Sales Revenue',
          value: '$ 38452',
          rate: '2.4%',
          desc: 'From previous period',
        },
        {
          icon: 'ri-briefcase-4-line',
          title: 'Average Price',
          value: '$ 15.4',
          rate: '2.4%',
          desc: 'From previous period',
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xl={12}>
                <Row>
                  <Welcome reports={this.state.reports} />
                </Row>
                {/* <MyFeed /> */}
              </Col>
              <Col
                md={12}
                className="d-flex justify-content-around align-content-center mb-2"
              >
                <ButtonGroup className="shadow rounded">
                  <Button color="white">My Feed</Button>
                  <Button color="primary">Save Influencer</Button>
                  <Button color="white">News Feed</Button>
                </ButtonGroup>
              </Col>
            </Row>

            <Row>
              <Categories />
            </Row>

            <div>
              <Instagram />
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
