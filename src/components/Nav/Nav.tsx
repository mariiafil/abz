import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <aside className="menu">
      <div className="user">
        <img src="img/avatar.png" alt="avatar" />
        <div className="user__info">
          <h3 className="user__name">John Ivanov</h3>
          <button type="button" className="user__button">
            <img src="img/settings.png" alt="settings" />
          </button>
          <p className="user__position">photographer</p>
        </div>
      </div>
      <nav className="navigation">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          to="/place_order"
        >
          Place order
        </NavLink>
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          to="/order"
        >
          Orders
        </NavLink>
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          to="/demo"
        >
          Product demo
        </NavLink>
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link--active"
          to="/packages"
        >
          Packages
        </NavLink>
      </nav>
    </aside>
  );
};
