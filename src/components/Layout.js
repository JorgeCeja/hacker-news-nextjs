import React from 'react';
import Head from 'next/head';

import Header from './Header';

const Layout = ({ title, description, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="manifest" href="/static/manifest.webmanifest" />

      <meta name="theme-color" content="#ff6600" />
      <link rel="shortcut icon" href="/static/icon.png" />
      <link rel="apple-touch-icon" href="/static/icon.png" />
      <meta name="apple-mobile-web-app-title" content="Hacker News" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>
    <Header />

    {children}

    <style jsx global>
      {`
        body {
          margin: 0;
          background: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        }
      `}
    </style>
  </div>
);

export default Layout;
