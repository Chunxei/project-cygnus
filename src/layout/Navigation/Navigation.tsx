import React from 'react';
import './Navigation.scss';

import { NavLink, Link } from 'react-router-dom';

function Navigation(): JSX.Element {
  return (
    <nav className="Navigation">
      <NavLink to="worlds" className="nav-link worlds-nav-link">
        Worlds
      </NavLink>
      <NavLink to="missions" className="nav-link missions-nav-link">
        Missions
      </NavLink>
      <NavLink to="starview" className="nav-link starview-nav-link">
        Starview
      </NavLink>
      <Link to="enroll" className="nav-link enroll-nav-link">
        ENROLL
      </Link>
    </nav>
  );
}

export default Navigation;
