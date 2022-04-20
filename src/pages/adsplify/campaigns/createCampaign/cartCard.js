import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  Media,
  Button,
  ModalHeader,
} from 'reactstrap';
import { Us } from 'react-flags-select';

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
const CartCart = ({ data, index }) => {
  const [showProfile, SetShowProfile] = useState(false);
  return (
    <Row>
      <Col sm={6} className="mt-1">
        {[1, 2, 3].map((data) => (
          <div className="p-2 mb-2 bg-light rounded">
            <Media>
              <img
                className="avatar-sm align-self-start rounded mr-3"
                src={imgData[2]}
                alt="Nazox"
              />
              <Media body>
                <div>
                  <div className="float-right">
                    <p className="font-size-14 font-weight-bold">
                      $200
                      <i className=" ri-indeterminate-circle-line ml-2 text-danger pt-2" />
                    </p>
                  </div>
                  <div>
                    <h5 className="mt-0 font-size-14">Mary Colins</h5>
                    <h1 className="font-size-10 mb-0">
                      <Us /> | Lagos
                    </h1>
                  </div>
                </div>
              </Media>
            </Media>
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
        ))}
      </Col>

      <Col sm={6} className="mt-1">
        <Card>
          <CardBody>
            <h4 className="font-size-14"> Summary Info </h4>
            <hr />
            <div>
              <p className="font-size-14"> Details </p>
              <p className="d-flex justify-content-between font-size-12">
                <span className="text-muted"> SubTotal </span>{' '}
                <span> $1234</span>
              </p>
              <p className="d-flex justify-content-between font-size-12">
                <span className="text-muted"> Fees </span> <span> 00:00</span>
              </p>
              <p className="d-flex justify-content-between font-size-12">
                <span className="text-muted"> Amount </span> <span> $1234</span>
              </p>
            </div>
            <hr />
            <h4 className="d-flex justify-content-between font-size-14">
              <span> Total</span> <span className="text-primary"> $1234</span>
            </h4>
          </CardBody>
        </Card>
        <Button className="mt-2 w-100" color="primary">
          {' '}
          Continue
        </Button>
      </Col>
    </Row>
  );
};

export default CartCart;
