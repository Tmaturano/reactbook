/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import '../styles/app.scss';

class App extends Component {
    state = {
      posts: [
        {
          id: 1,
          name: 'Thiago Maturana',
          avatar: 'https://avatars.githubusercontent.com/tmaturano',
          time: 'há 3 min',
          location: 'Joinville/SC - Brazil',
          body: 'Testing React. Im enjoying learning it! Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
        },
        {
          id: 2,
          name: 'Microsoft',
          avatar: 'https://avatars.githubusercontent.com/Microsoft',
          time: 'há 1 h',
          location: 'São Paulo/SP - Brazil',
          body: 'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
        },
      ],
    };

    render() {
      const { posts } = this.state;
      return (
        <Fragment>
          <Header />
          <div className="post-container">
            {posts && posts.map(post => <Post key={post.id} data={post} />)}
          </div>
        </Fragment>
      );
    }
}

render(<App />, document.getElementById('app'));
