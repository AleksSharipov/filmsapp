import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import logo from '../../img/film.svg';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__promo">
          <img src={logo} alt='logo' />
          <h2>Films app</h2>
        </div>
      </Link>
      <Link to="/cart">
        <div className="header__cart">
          <h3>Корзина:</h3>
          <span>0</span>
        </div>
      </Link>

    </div>
  )
}
