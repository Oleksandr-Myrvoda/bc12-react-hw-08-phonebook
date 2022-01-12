import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../AuthNav/AuthNav.module.css";

import { getIsAuthenticated } from "../../redux/auth";

export default function Navigation() {
  const isAuth = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/"
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
