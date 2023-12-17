"use client";
import { useState } from "react";
import styles from "./dashboard.module.scss";

const NavBar = () => {
  const [value, setValue] = useState("");
  const name = "Akshita Patel";
  const imgSrc =
    "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg";
  return (
    <nav className={styles.navBar}>
      <div className={styles.searchBox}>
        <i className="pi pi-search" style={{ opacity: "0.6" }} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.inputBox}
          placeholder="search"
        />
      </div>
      <div className={styles.navRight}>
        <div className={styles.dateElement}>
          <p>
            11-10-2022
            <i className="pi pi-search" />
          </p>
          <p>OR</p>
          <p>
            11-10-2022
            <i className="pi pi-search" />
          </p>
        </div>

        <div className={styles.personalInfo}>
          <div>
            <img src={imgSrc} />
            <div>
              <small>Welcome Back</small>
              <p>{name}</p>
            </div>
          </div>
          <i className="pi pi-search" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
