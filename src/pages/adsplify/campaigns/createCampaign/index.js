import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabPane,
  TabContent,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import PortForm from './postForm';
import InfluencerForm from './influencerForm';
import CampaignDetails from './campaignDetails';

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        this.setState({
          activeTab: tab,
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody className="m-0">
                    <div
                      id="addproduct-nav-pills-wizard"
                      className="twitter-bs-wizard"
                    >
                      <Nav pills justified className="twitter-bs-wizard-nav">
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              this.toggleTab(1);
                            }}
                            className={classnames({
                              active: this.state.activeTab === 1,
                            })}
                          >
                            <span className="step-number">01</span>
                            <span className="step-title">Set Post</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            onClick={() => {
                              this.toggleTab(2);
                            }}
                            className={classnames({
                              active: this.state.activeTab === 2,
                            })}
                          >
                            <span className="step-number">02</span>
                            <span className="step-title">
                              Choose Influencer
                            </span>
                          </NavLink>
                        </NavItem>

                        <NavItem>
                          <NavLink
                            onClick={() => {
                              this.toggleTab(3);
                            }}
                            className={classnames({
                              active: this.state.activeTab === 3,
                            })}
                          >
                            <span className="step-number">03</span>
                            <span className="step-title"> Set Captions</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        activeTab={this.state.activeTab}
                        className="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1}>
                          <PortForm/>
                        </TabPane>
                        <TabPane tabId={2}>
                          <InfluencerForm/>
                        </TabPane>
                        <TabPane tabId={3}>
                          <CampaignDetails/>
                        </TabPane>
                      </TabContent>
                      <ul className="pager wizard twitter-bs-wizard-pager-link">
                        <li
                          className={
                            this.state.activeTab === 1
                              ? 'previous disabled'
                              : 'previous'
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              this.toggleTab(this.state.activeTab - 1);
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={
                            this.state.activeTab === 4
                              ? 'next disabled'
                              : 'next'
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              this.toggleTab(this.state.activeTab + 1);
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateCampaign;
