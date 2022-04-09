import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalHeader,
  CardText,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Us, Gb, Fr, Ng } from 'react-flags-select';

import img1 from '../../assets/images/adsProfile/asset-1.png';
import img2 from '../../assets/images/adsProfile/asset-2.png';
import img3 from '../../assets/images/adsProfile/asset-3.png';
import img4 from '../../assets/images/adsProfile/asset-4.png';
import igIcon from '../../assets/images/icons8-instagram-48.png';

import InfluencerProfile from '../../pages/adsplify/InfluencerProfile';

const imgData = [img1, img2, img3, img4];
const UserCard = ({ data }) => {
  const [showProfile, SetShowProfile] = useState(false);
  return (
    <div className="p-2 profile-listing-holder">
      <Card className="shadow-md" onClick={() => SetShowProfile(true)}>
        <div className="profile-listing-img-holder">
          <img
            loading="lazy"
            className="profile-listing-img"
            src={imgData[data]}
          />
        </div>
        <CardImgOverlay className="p-2">
          <CardTitle className="text-white float-right mt-0">
            <i className="ri-bookmark-2-fill bg-secondary rounded-circle p-1"></i>
          </CardTitle>
          <CardTitle className="text-white float-left  mt-0">
            Falade Timilehin
          </CardTitle>
        </CardImgOverlay>
        <CardBody className="p-2 pt-4">
          <div style={{ position: 'relative' }}>
            <div className="d-flex justify-content-between">
              <div>
                <Us /> | Lagos
              </div>
              <h1 className="card-title text-right  font-size-12  mb-0">
                $350
              </h1>
            </div>

            <div className="text-muted mr-3">
              {[1, 2, 3].map((star) => (
                <span
                  key={star}
                  className="mdi mdi-star font-size-10 text-warning mr-1"
                ></span>
              ))}
              <span className="mdi mdi-star font-size-10 mr-1"></span>
            </div>
            <span
              className="rounded-circle bg-white"
              style={{
                position: 'absolute',
                top: '-38px',
                right: '0',
              }}
            >
              <img src={igIcon} alt="icon" height={18} className="m-2" />
            </span>
          </div>
        </CardBody>
      </Card>
      <Modal
        size="xl"
        isOpen={showProfile}
        toggle={() => SetShowProfile(!showProfile)}
      >
        <ModalHeader toggle={() => SetShowProfile(false)}>Profile</ModalHeader>
        <InfluencerProfile />
      </Modal>
    </div>
  );
};

export default UserCard;
