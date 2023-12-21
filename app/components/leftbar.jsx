import Image from "next/image";
import styles from "./dashboard.module.scss";
import { FaHome, FaRegFileAlt, FaRegUser, FaHeadphonesAlt } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { GrAnalytics, GrMultimedia, GrCloudComputer } from "react-icons/gr";
import { IoSettings, IoNotifications } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import React from "react";

const featureElements = [
  {
    name: "Dashboard",
    icon: FaHome,
    link: "#",
  },
  {
    name: "Content",
    icon: FaRegFileAlt,
    link: "#",
  },
  {
    name: "Team",
    icon: AiOutlineTeam,
    link: "#users",
  },
  {
    name: "User",
    icon: FaRegUser ,
    link: "#",
  },
  {
    name: "App/Web",
    icon: GrCloudComputer ,
    link: "#",
  },
  {
    name: "Analytics",
    icon: GrAnalytics ,
    link: "#",
  },
  {
    name: "Media",
    icon: GrMultimedia ,
    link: "#",
  },
  {
    name: "Notification",
    icon: IoNotifications ,
    link: "#",
  },
  {
    name: "Subscription",
    icon: MdSubscriptions ,
    link: "#",
  },
  {
    name: "Settings",
    icon: IoSettings ,
    link: "#",
  },
];
const Leftbar = () => {
  return (
    <div className={`${styles.leftBar}`}>
      <Image
        src="/merina.png"
        width="101"
        height="63"
        className={`${styles.logo}`}
      />
      <div className={`${styles.featureContainer}`}>
        {featureElements.map((ele, id) => {
          return (
            <div
              key={id}
              className={`${styles.featureElement} ${id === 0 && styles.active}`}
            >
                {ele.icon && React.createElement(ele.icon,{className:`${styles.featureLogo}`})}
              <p className={`${styles.featureElement}`}>{ele.name}</p>
            </div>
          );
        })}
      </div>
      <div className={`${styles.lastFeatureContainer}`}>
        <div className={`${styles.lastFeature}`}>
          <FaHeadphonesAlt className={styles.featureLogo} style={{padding:"10px", fontSize:"1.1rem"}}/>
          <p className={`${styles.lastFeature}`}>Contact Support</p>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
