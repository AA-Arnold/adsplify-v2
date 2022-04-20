import React, { Component } from 'react';
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Card,
  CardBody,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

class LatestCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    const data = {
      columns: [
        {
          dataField: 'orderId',
          text: 'ID',
        },
        {
          dataField: 'date',
          text: 'Date',
        },
        {
          dataField: 'billingName',
          text: 'Campaign Name',
        },
        {
          dataField: 'total',
          text: 'Price',
        },
        {
          dataField: 'type',
          text: 'Type',
        },
        {
          dataField: 'status',
          text: 'Payment Status',
        },
        {
          dataField: 'action',
          text: 'Action',
        },
      ],
      rows: [
        {
          id: 1,
          orderId: (
            <Link to="/manage_campaign" className="text-dark font-weight-bold">
              #NZ1572
            </Link>
          ),
          type: 'Rill',
          date: '04 Apr, 2020',
          billingName: 'Walter Brown',
          total: '$172',
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
          action: (
            <Link to="/manage_campaign" className="mr-3 text-primary">
              <i className="ml-2 p-1 bg-primary text-white rounded fas fa-arrow-right"></i>
            </Link>
          ),
        },
        {
          id: 2,
          orderId: (
            <Link to="/manage_campaign" className="text-dark font-weight-bold">
              #NZ1571
            </Link>
          ),
          type: 'Rill',
          date: '03 Apr, 2020',
          billingName: 'Jimmy Barker',
          total: '$165',
          status: (
            <div className="badge badge-soft-warning font-size-12">unpaid</div>
          ),
          action: (
            <Link to="/manage_campaign" className="mr-3 text-primary">
              <i className="ml-2 p-1 bg-primary text-white rounded fas fa-arrow-right"></i>
            </Link>
          ),
        },
        {
          id: 3,
          orderId: (
            <Link to="/manage_campaign" className="text-dark font-weight-bold">
              #NZ1570
            </Link>
          ),
          type: 'Rill',
          date: '03 Apr, 2020',
          billingName: 'Donald Bailey',
          total: '$146',
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
          action: (
            <Link to="/manage_campaign" className="mr-3 text-primary">
              <i className="ml-2 p-1 bg-primary text-white rounded fas fa-arrow-right"></i>
            </Link>
          ),
        },
        {
          id: 4,
          orderId: (
            <Link to="/manage_campaign" className="text-dark font-weight-bold">
              #NZ1569
            </Link>
          ),
          type: 'Rill',
          date: '02 Apr, 2020',
          billingName: 'Paul Jones',
          total: '$183',
          status: (
            <div className="badge badge-soft-success font-size-12">Paid</div>
          ),
          action: (
            <Link to="/manage_campaign" className="mr-3 text-primary">
              <i className="ml-2 p-1 bg-primary text-white rounded fas fa-arrow-right"></i>
            </Link>
          ),
        },
        {
          id: 5,
          orderId: (
            <Link to="/manage_campaign" className="text-dark font-weight-bold">
              #NZ1568
            </Link>
          ),
          type: 'Rill',
          date: '04 Apr, 2020',
          billingName: 'Walter Brown',
          total: '$172',
          status: (
            <div className="badge badge-soft-danger font-size-12">
              Cancelled
            </div>
          ),
          action: (
            <Link to="/manage_campaign" className="mr-3 text-primary">
              <i className="ml-2 p-1 bg-primary text-white rounded fas fa-arrow-right"></i>
            </Link>
          ),
        },
      ],
    };

    return (
      <React.Fragment>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Dropdown
                isOpen={this.state.menu}
                toggle={() => this.setState({ menu: !this.state.menu })}
                className="float-right"
              >
                <DropdownToggle tag="i" className="arrow-none card-drop">
                  <i className="mdi mdi-dots-vertical"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>All</DropdownItem>

                  <DropdownItem>Twitter</DropdownItem>

                  <DropdownItem>IG</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <h4 className="card-title mb-4">Latest Campaign</h4>

              <BootstrapTable
                bootstrap4
                keyField="id"
                data={data.rows}
                columns={data.columns}
                striped
                hover
              />
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default LatestCampaign;
