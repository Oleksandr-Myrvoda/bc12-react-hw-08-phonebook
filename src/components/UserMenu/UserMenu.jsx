import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserMenu.module.css";

import { getUsername, logOut } from "../../redux/auth";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const onLogout = () => dispatch(logOut());

  return (
    <div className={styles.userContent}>
      <span className={styles.userText}>Welcome, {name}</span>

      <button type="button" className={styles.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
