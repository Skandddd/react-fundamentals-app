import React from "react";
import { Button } from "../../common";
import styles from "./styles.module.css";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logoImage} />
      </div>
      <div className={styles.userContainer}>
        <p className={styles.userName}>Harry Potter</p>
        <Button
          buttonText="Logout"
          handleClick={() => {}}
          data-testid="logoutButton"
        />
      </div>
    </div>
  );
};
