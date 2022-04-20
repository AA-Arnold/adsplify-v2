import React, { useState } from 'react';

import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Button,
  ModalHeader,
  Collapse,
} from 'reactstrap';
import { Us } from 'react-flags-select';

import img1 from '../../../../assets/images/adsProfile/asset-1.png';
import img2 from '../../../../assets/images/adsProfile/asset-2.png';
import img3 from '../../../../assets/images/adsProfile/asset-3.png';
import img4 from '../../../../assets/images/adsProfile/asset-4.png';
import igIcon from '../../../../assets/images/icons8-instagram-48.png';
import { Link } from 'react-router-dom';

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
const CampaignDetails = ({ data, index }) => {
  const [openCard, setOpen] = useState(null);

  const setOpenHandler =(data)=>{
    if(openCard === data) return   setOpen(null)
    setOpen(data)
  }
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h4>Campaign Details</h4>
        <Button className="mt-2 px-4" color="primary">
          Save
        </Button>
      </div>
      <Row className="justify-content-between mt-3">
        <Col sm={6} md={5} className="mt-1">
          {[1, 2, 3].map((data) => (
            <div key="data">
              <Link
                to="#"
                className="text-dark d-block"
                onClick={() => setOpenHandler(data)}
              >
                <div className="p-2 mb-2 bg-white shadow-lg rounded">
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
                            <i className="  ri-arrow-down-s-line ml-2 text-secondary pt-2 font-size-14" />
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
                </div>
              </Link>
              <Collapse isOpen={openCard === data} id="collapseExample1">
                <Card className="bg-light">
                  <div className="p-2">
                    <span className="d-block font-size-14 pb-4 pt-2 pl-2 border border-2 rounded text-muted bg-white">
                      Captions
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="d-block font-size-14 py-2 pl-2 border border-2 rounded text-muted bg-white">
                      @Tag me Something
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="d-block font-size-14 py-2 pl-2 border border-2 rounded text-muted bg-white">
                      #Hashtags
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="pb-0 mb-1 font-size-12"> Selected Post Time/date </p>
                    <Row>
                      <Col>
                        <span className="d-block font-size-14 py-2 pl-2 border border-2 rounded text-muted bg-white text-center">
                          <i className=" ri-calendar-todo-line text-primary mr-1 mt-2 pt-2" />
                          <span>22-27-march</span>
                        </span>
                      </Col>
                      <Col>
                        <span className="d-block font-size-14 py-2 pl-2 border border-2 rounded text-muted bg-white text-center">
                          <i className=" ri-time-line text-primary mr-1 mt-2 pt-2" />
                          <span>10:10pm</span>
                        </span>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Collapse>
            </div>
          ))}
        </Col>

        <Col sm={6} md={5} className="mt-1">
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
                  <span className="text-muted"> Amount </span>{' '}
                  <span> $1234</span>
                </p>
              </div>
              <hr />
              <h4 className="d-flex justify-content-between font-size-14">
                <span> Total</span> <span className="text-primary"> $1234</span>
              </h4>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignDetails;
