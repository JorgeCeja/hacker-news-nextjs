/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

const Header = ({ showBack }) => (
  <header>
    <div className="header-container">
      <Link href="/">
        <a className="title">
          {showBack && <span className="back">&lt;</span>}
          <span>HN</span>
        </a>
      </Link>
      <div>
        <svg
          width="27px"
          height="14px"
          viewBox="0 0 27 14"
          version="1.1"
          style={{ fill: 'inherit' }}
        >
          <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
            <polygon
              id="Arrow"
              fillRule="nonzero"
              points="13.4999996 13.9214282 0.6 1.17499997 1.82857139 0.1 13.4999996 11.7714282 25.1714278 0.1 26.3999992 1.17499997"
            />
          </g>
        </svg>
      </div>
    </div>
    <style jsx>
      {`
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #fff;
        }
        .title {
          text-decoration: none;
          font-weight: bold;
          font-size: 1.4em;
          color: #000;
        }
      `}
    </style>
  </header>
);

export default Header;
