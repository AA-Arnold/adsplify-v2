import React, { Component } from 'react';
// import { Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import { Avatar, Chip } from '@material-ui/core';

//Import Charts
import './dashboard.scss';
import avatar2 from '../../assets/images/users/avatar-2.jpg';

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
class Categories extends Component {
  render() {
    return (
      <div className="my-3">
        <div className="w-100">
          <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
            <Chip
              className="mr-4"
              label="View All"
              variant="outlined"
              color="warning"
            />
            {categories.map((data) => (
              <Link to="/categories" key={data}>
                <Chip
                  className="mr-4"
                  avatar={<Avatar alt="Natacha" src={avatar2} />}
                  label={data}
                  variant="outlined"
                  color="warning"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
