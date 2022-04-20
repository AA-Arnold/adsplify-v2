import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

//Simple bar
import SimpleBar from 'simplebar-react';

import img1 from '../../../../../assets/images/users/avatar-2.jpg';
import igIcon from '../../../../../assets/images/icons8-instagram-48.png';

class RecentlyActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <Dropdown
              className="float-right"
              isOpen={this.state.menu}
              toggle={() => this.setState({ menu: !this.state.menu })}
            >
              <DropdownToggle
                tag="i"
                className="darrow-none card-drop"
                aria-expanded="false"
              >
                <i className="mdi mdi-dots-vertical"></i>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="">All</DropdownItem>

                <DropdownItem href=""> Instagram </DropdownItem>

                <DropdownItem href="">Twitter</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <h4 className="card-title mb-4">Recent Payment</h4>

            <SimpleBar style={{ maxHeight: '330px' }}>
              <ul className="list-unstyled activity-wid">
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <img src={img1} className="avatar-xs rounded-circle" />
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <span>
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mx-2"
                      /></span>28 Apr, 2020{' '}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0 d-inline-block">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <img src={img1} className="avatar-xs rounded-circle" />
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <span>
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mx-2"
                      /></span>28 Apr, 2020{' '}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0 d-inline-block">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <img src={img1} className="avatar-xs rounded-circle" />
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <span>
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mx-2"
                      /></span>28 Apr, 2020{' '}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0 d-inline-block">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <img src={img1} className="avatar-xs rounded-circle" />
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <span>
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mx-2"
                      /></span>28 Apr, 2020{' '}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0 d-inline-block">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <img src={img1} className="avatar-xs rounded-circle" />
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <span>
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mx-2"
                      /></span>28 Apr, 2020{' '}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0 d-inline-block">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
                <li className="activity-list">
                  <div className="activity-icon avatar-xs">
                    <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                      <img src={img1} className="avatar-xs rounded-circle" />
                    </span>
                  </div>
                  <div>
                    <div>
                      <h5 className="font-size-13">
                        <span>
                      <img
                        src={igIcon}
                        alt="icon"
                        height={18}
                        className="mx-2"
                      /></span>28 Apr, 2020{' '}
                        <small className="text-muted">12:07 am</small>
                      </h5>
                    </div>

                    <div>
                      <p className="text-muted mb-0 d-inline-block">
                        Responded to need “Volunteer Activities”
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </SimpleBar>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RecentlyActivity;
