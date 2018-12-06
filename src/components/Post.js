/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      name={props.data.name}
      time={props.data.time}
      location={props.data.location}
    />
    <p>{props.data.body}</p>
  </div>
);

// eslint-disable-next-line react/no-typos
Post.PropTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
