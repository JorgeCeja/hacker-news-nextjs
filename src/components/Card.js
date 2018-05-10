/* eslint-disable camelcase, jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Card = ({ story }) => {
  const {
    id, title, url, user, time_ago, comments_count, points,
  } = story;

  return (
    <div className="card-container" key={id}>
      <div className="stats">
        <span className="points">{points}</span>
      </div>
      <div className="content">
        <div className="title">
          <h2>
            <a href={url}>{title}</a>
          </h2>
        </div>
        <div className="details">
          {`By ${user} ${time_ago} | `}
          <Link prefetch href={`/story?id=${id}`}>
            <a>{` ${comments_count} comments`}</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .card-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            background: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.07);
            padding: 1.25em 1.5em 1.25em 0;
          }
          .stats {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 5em;
          }
          .points {
            color: #00;
            font-weight: 600;
            font-size: 1.2em;
          }
          .content {
            flex: 1;
          }
          .title h2 {
            font-size: 1.1em;
            font-weight: normal;
            margin: 0;
            margin-bottom: 0.15em;
          }
          .title a {
            text-decoration: none;
            color: #000;
          }
          .details {
            font-size: 0.9em;
            color: #999999;
          }
          .details a {
            color: #067df7;
            text-decoration: none;
          }
          .details a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
