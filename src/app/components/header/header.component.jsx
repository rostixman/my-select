import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export const HeaderComponent = () => (
  <header className="header">
    Menu:
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li> | </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);
