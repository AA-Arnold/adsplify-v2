import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Welcome from './Welcome';
import Categories from './Categories';
import Instagram from './Instagram';

const data = [
  './assets/images/adsProfile/asset-1.png',
  './assets/images/adsProfile/asset-2.png',
  './assets/images/adsProfile/asset-3.png',
  './assets/images/adsProfile/asset-4.png',
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: 1,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xl={12}>
                <Row className="d-none d-sm-flex">
                  <Welcome />
                </Row>
                {/* <MyFeed /> */}
              </Col>
              <Col
                md={12}
                className="d-flex justify-content-around align-content-center mb-2"
              >
                <div className="bg-white p-1 rounded-pill">
                  <button
                    onClick={() => this.setState({ feed: 1 })}
                    className={`btn btn-sm btn-${
                      this.state.feed === 1 ? 'primary' : 'white'
                    } rounded-pill`}
                  >
                    My Feeds
                  </button>
                  <button
                    onClick={() => this.setState({ feed: 2 })}
                    className={`btn btn-sm btn-${
                      this.state.feed === 2 ? 'primary' : 'white'
                    } rounded-pill`}
                  >
                    Saved Influenncer
                  </button>
                  <button
                    onClick={() => this.setState({ feed: 3 })}
                    className={`btn btn-sm btn-${
                      this.state.feed === 3 ? 'primary' : 'white'
                    } rounded-pill`}
                  >
                    News Feeds
                  </button>
                </div>
              </Col>
            </Row>

            <Categories />

            <div>
              <Instagram
                data={data}
                title="Top Influencers"
                description="Hire influencers by categories on all platforms."
              />
            </div>
            <hr />
            <div>
              <Instagram
                data={data}
                title="Featured Influencers"
                description="Hire instagram influencers"
              />
            </div>

            <hr />
            <div>
              <Instagram
                data={data}
                title="Blog"
                description="Hire influencers"
              />
            </div>

            <hr />
            <div>
              <Instagram
                data={data}
                title="Music"
                description="Hire influencers"
              />
            </div>

            <hr />
            <div>
              <Instagram
                data={data}
                title="Dance"
                description="Hire influencers"
              />
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
