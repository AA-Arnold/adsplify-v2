import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalBody,
  Media,
  MediaBody,
  Button,
  ModalHeader,
  CardText,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { Chip } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { Us, Gb, Fr, Ng } from 'react-flags-select';

import img1 from '../../../../assets/images/adsProfile/asset-1.png';
import img2 from '../../../../assets/images/adsProfile/asset-2.png';
import img3 from '../../../../assets/images/adsProfile/asset-3.png';
import img4 from '../../../../assets/images/adsProfile/asset-4.png';
import igIcon from '../../../../assets/images/icons8-instagram-48.png';

import InfluencerProfile from '../../InfluencerProfile';

const imgData = [
  img1,
  img2,
  img3,
  img4,
  img1,
  img2,
  img3,
  img4,
  img1,
  img2,
  img3,
  img4,
];

const categories = [
  'Music',
  'Dance',
  'LifeStyle',
  'Food',
  'Blogging',
  'Entertainment',
  'Technology',
  'Model',
];
const UserCard = ({ data, index }) => {
  const [showProfile, SetShowProfile] = useState(false);
  return (
    <Col key={index} xs={12}>
      <div className="p-2 mb-2">
        {/* <Card className="shadow-md" onClick={() => SetShowProfile(true)}>
          <CardBody className="row justify-content-between">
            <div className="col-xs-4 col-sm-2">
              <img loading="lazy" className="w-100 h-auto rounded" src={imgData[data]} />
            </div>
            <div className=" col-xs-8 col-sm-10 row justify-content-between">
              <div>
                <h4 className="font-size-12"> Lisa Johnson </h4>
                <h1 className="font-size-10 mb-0">
                  <Us /> | Lagos
                </h1>
              </div>
              <div>
                <Button size="sm" color="primary">
                  Add
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
         */}

        <Media>
          <img
            className="avatar-sm align-self-start rounded mr-3"
            src={imgData[data]}
            alt="Nazox"
          />
          <Media body>
            <div>
              <div className="float-right">
                <Button color="primary" size="sm">
                  Add
                </Button>
              </div>
              <div>
                <h5 className="mt-0 font-size-14">Mary Colins</h5>
                <h1 className="font-size-10 mb-0">
                  <Us /> | Lagos
                </h1>
                <p className="d-none d-sm-block text-muted mt-1 mb-0 font-size-12 pb-0">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </p>

                <div className="text-muted mr-3">
                  {[1, 2, 3].map((star) => (
                    <span
                      key={star}
                      className="mdi mdi-star font-size-10 text-warning mr-1"
                    ></span>
                  ))}
                  <span className="mdi mdi-star font-size-10 mr-1"></span>
                </div>
              </div>
            </div>
          </Media>
        </Media>
        <div className="d-none d-sm-flex">
          {categories.map((data) => (
            <Link to="/categories" key={data}>
              <span className="badge badge-light font-size-12 rounded mr-1">
                #{data}
              </span>
            </Link>
          ))}
        </div>
        <Modal
          size="xl"
          isOpen={showProfile}
          toggle={() => SetShowProfile(!showProfile)}
        >
          <ModalHeader toggle={() => SetShowProfile(false)}>
            Profile
          </ModalHeader>
          <InfluencerProfile />
        </Modal>
      </div>
      <hr />
    </Col>
  );
};

export default UserCard;
