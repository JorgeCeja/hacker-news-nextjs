/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';

class Story extends Component {
  static async getInitialProps({ query }) {
    const req = await fetch(`https://api.hackerwebapp.com/item/${query.id}`);
    const story = await req.json();
    return { story };
  }

  renderStory = comment => (
    <div className="comment">
      <h2>{comment.user}</h2>
      <div dangerouslySetInnerHTML={{ __html: comment.content }} />
    </div>
  );

  render() {
    return (
      <Layout title={this.props.story.title}>
        <div className="container-story">
          <h1>{this.props.story.title}</h1>
          {this.props.story.comments.map(this.renderStory)}
        </div>
        <style jsx>
          {`
            .container-story {
              margin: 1em;
            }
            h1 {
              font-size: 1.5em;
              font-weight: normal;
            }
            h2 {
              font-size: 0.9em;
              font-weight: bold;
              margin: 0;
              margin-bottom: 0.5em;
            }
          `}
        </style>
      </Layout>
    );
  }
}

export default Story;
