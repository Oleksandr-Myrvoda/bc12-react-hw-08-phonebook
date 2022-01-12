import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        exact
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        exact
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
