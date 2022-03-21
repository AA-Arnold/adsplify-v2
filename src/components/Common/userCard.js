import React from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardImgOverlay,
  CardTitle,
} from 'reactstrap';
import { Us, Gb, Fr, Ng } from 'react-flags-select';

import img1 from '../../assets/images/adsProfile/asset-1.png';
import img2 from '../../assets/images/adsProfile/asset-2.png';
import img3 from '../../assets/images/adsProfile/asset-3.png';
import img4 from '../../assets/images/adsProfile/asset-4.png';
import igIcon from '../../assets/images/icons8-instagram-48.png';

const imgData = [img1, img2, img3, img4]
const UserCard = ({data}) => {
  return (
    <div className="p-2 profile-listing-holder">
      <Card className="shadow-md">
        <div className="profile-listing-img-holder">
          <img loading="lazy" className="profile-listing-img" src={imgData[data]} />
        </div>
        {/* <CardImg top className="rounded-top rounded-0" src={img3} alt="Skote" /> */}
        <CardImgOverlay className="p-2">
          <CardTitle className="text-white float-right mt-0">
            <i class="ri-bookmark-2-fill bg-secondary rounded-circle p-1"></i>
          </CardTitle>
          <CardTitle className="text-white float-left  mt-0">
            Falade Timilehin
          </CardTitle>
        </CardImgOverlay>
        <CardBody className="p-2 pt-4">
          <CardText>
            <div style={{ position: 'relative' }}>
              <div className="d-flex justify-content-between">
                <div>
                  <h1 className="card-title font-size-12 mb-0">
                    <Us /> | Lagos
                  </h1>
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
                {/* <i class="ri-bookmark-2-fill bg-white rounded-circle p-2 font-size-16"></i> */}
              </span>
            </div>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
