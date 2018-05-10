import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import Card from '../components/Card';

class HomePage extends Component {
  static async getInitialProps() {
    const req = await fetch('https://api.hnpwa.com/v0/news/1.json');
    const stories = await req.json();
    return { stories };
  }

  renderFeed = story => <Card key={story.id} story={story} />;

  render() {
    return <Layout title="Latest News">{this.props.stories.map(this.renderFeed)}</Layout>;
  }
}

export default HomePage;
