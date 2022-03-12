import React, { Component } from 'react';
import {
  Col,
  Card,
  CardTitle,
  CardImgOverlay,
  CardImg,
  CardText,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

// import images
import img6 from '../../assets/images/banner.svg';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: 'UI Elements', link: '#' },
        { title: 'Buttons', link: '#' },
      ],
      check1: true,
      check2: false,
      check3: false,
      radio1: true,
      radio2: false,
      radio3: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Col>
          <Card>
            <CardImg className="img-fluid bg-light" src={img6} alt="future" />
            <CardImgOverlay className="d-flex justify-content-around align-content-center align-items-center text-center">
              <div>
                <h1 className="text-white mt-0">
                  Welcome to the Future of Adverts
                </h1>
                <p className="text-light">
                  Discover the world of adplify influencers and promoters. Find
                  Influencers that you want to work with <br /> and create
                  campaign with ease.
                </p>
              </div>
            </CardImgOverlay>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default Welcome;
