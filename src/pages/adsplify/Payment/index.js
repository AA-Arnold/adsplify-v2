import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import PaymentTable from './paymentTable';

const report = {
  icon: ' ri-checkbox-blank-circle-fill',
  title: 'Total Balance',
  value: '1,340,900',
  rate: '+2.4% this month',
  desc: 'From previous period',
};

const Payment = () => {
  const [menu, setMenu] = useState(false)
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row className="justify-content-between align-content-center">
            <Col xs={12} md={4}>
              <Card>
                <CardBody>
                  <Media>
                    <Media body className="overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2">
                        {report.title}
                      </p>
                      <h4 className="mb-0">₦{report.value}</h4>
                      <div className="text-truncate pt-2">
                        <span className="badge badge-soft-success font-size-11 mr-1">
                          <i className="mdi mdi-menu-up"> </i> {report.rate}
                        </span>
                      </div>
                    </Media>
                    <div>
                      <div>
                        <span className="text-primary">
                          <i className={report.icon + ' font-size-12'}></i>{' '}
                          Pending
                        </span>
                        <p> ₦11,0000 </p>
                      </div>
                      <div>
                        <span className="text-warning">
                          <i className={report.icon + ' font-size-12'}></i> In
                          daft
                        </span>
                        <p className="mb-0"> ₦0:00 </p>
                      </div>
                    </div>
                  </Media>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} md={2}>
              <Button className="px-4" color="primary">
                {' '}
                Withdraw{' '}
              </Button>
            </Col>
          </Row>

          <div>
            <h4 className="card-title"> Transaction History</h4>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <Dropdown
                    isOpen={menu}
                    toggle={() => setMenu(!menu)}
                    className="float-right"
                  >
                    <DropdownToggle tag="i" className="arrow-none card-drop">
                      <i className="mdi mdi-dots-vertical"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>All</DropdownItem>

                      <DropdownItem>Pending</DropdownItem>

                      <DropdownItem>Completed</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <p className="text-right text-primary">
                    {' '}
                    <i
                      className="ri-download-cloud-2-line
 font-size-12 mr-1"
                    ></i>
                    Print Statement{' '}
                  </p>
                </div>
                <PaymentTable />
              </CardBody>
            </Card>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payment;
