import React, { Component } from 'react';
import { Row, Col, Card, CardBody, Media } from 'reactstrap';

import Group1 from '../../../../../assets/images/Group1.svg';
import Group2 from '../../../../../assets/images/Group2.svg';
import Group3 from '../../../../../assets/images/Group3.svg';

const imgGallery = [Group1, Group2, Group3];

const reports = [
  {
    icon: 'ri-police-car-fill',
    title: 'Total Campaign',
    value: '452',
    rate: '2.4%',
    desc: 'From previous period',
  },
  {
    icon: 'ri-briefcase-4-line',
    title: 'Active Campaign',
    value: '515',
    rate: '2.4%',
    desc: 'From previous period',
  },
  {
    icon: 'ri-user-2-line',
    title: 'Pending Campaign',
    value: '55',
    rate: '2.4%',
    desc: 'From previous period',
  },
];

const MiniWidgets = () => {
  return (
    <React.Fragment>
      <div className="listing-row_influencer">
        {reports.map((report, key) => (
          <div key={key} md={4} className="profile-listing-holder_influencer">
            <Card>
              <CardBody>
                <Media className="align-items-center">
                  <Media body className="overflow-hidden ">
                    <h4 className="mb-0 font-size-22">{report.value}</h4>
                    <p className="text-truncate font-size-12 mb-2">
                      {report.title}
                      <span className="badge ml-2 font-size-11 mr-1 text-success">
                        <i className="mdi mdi-menu-up"> </i> {report.rate}
                      </span>
                    </p>
                  </Media>
                  <div className="text-primary">
                    <img
                      src={imgGallery[key]}
                      alt="group_1"
                      className="avatar-md"
                    />
                  </div>
                </Media>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default MiniWidgets;
