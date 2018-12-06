/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="data-container">
      <strong>{props.name}</strong>
      <span>
        {props.time}
        ,
        {' '}
        {props.location}
      </span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default PostHeader;
