"use client";
import { useState } from "react";
import styles from "./dashboard.module.scss";
import { FaCalendarAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

const NavBar = () => {
  const [value, setValue] = useState("");
  const name = "Akshita Patel";
  const imgSrc =
    "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg";
  return (
    <nav className={styles.navBar}>
      <div className={styles.searchBox}>
        <FiSearch style={{ opacity: "0.6" }} />
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
            <FaCalendarAlt  style={{padding: "0 8px", color:"#3a1597"}}/>
          </p>
          <p>OR</p>
          <p>
            11-10-2022
            <FaCalendarAlt style={{padding: "0 8px",color:"#3a1597"}}/>
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
          <IoChevronDown style={{padding: "3px",}}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;