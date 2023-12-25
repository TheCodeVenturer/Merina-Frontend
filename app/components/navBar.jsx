"use client";
import { useState,useEffect } from "react";
import styles from "./dashboard.module.scss";
import { FaCalendarAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { useAppState } from "../context/stateContext";
import { useRouter } from "next/navigation";
import axios from "axios"

const NavBar = () => {
  const {user,updateUser} = useAppState()
  const [value, setValue] = useState("");
  const router = useRouter()
  const imgSrc =
    "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg";
  
  useEffect(()=>{
    const fetchUser = async ()=>{
        const response = await axios.get("https://merina-backend-production.up.railway.app/login/success",{withCredentials:true});
        console.log(response);
        updateUser(response.data.user)
    }
    fetchUser()
  },[])

  const logout = async ()=>{
    const res = await axios.get("https://merina-backend-production.up.railway.app/logout",{withCredentials:true});
    if(res.data.msg) router.push("/login")

  }
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
            <img src={(user && user.picture)?user.picture : imgSrc} alt={user && user.name}/>
            <div>
              <small>Welcome Back</small>
              <p>{user && user.name}</p>
            </div>
          </div>
          <IoChevronDown style={{padding: "3px",cursor:"pointer"}} onClick={logout}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
