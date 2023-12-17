import Image from "next/image";
import styles from "./dashboard.module.scss";

const featureElements = [
  {
    name: "Dashboard",
    icon: "home",
    link: "#",
  },
  {
    name: "Content",
    icon: "file",
    link: "#",
  },
  {
    name: "Team",
    icon: "home",
    link: "#users",
  },
  {
    name: "User",
    icon: "home",
    link: "#",
  },
  {
    name: "App/Web",
    icon: "home",
    link: "#",
  },
  {
    name: "Analytics",
    icon: "home",
    link: "#",
  },
  {
    name: "Media",
    icon: "home",
    link: "#",
  },
  {
    name: "Notification",
    icon: "home",
    link: "#",
  },
  {
    name: "Subscription",
    icon: "home",
    link: "#",
  },
  {
    name: "Settings",
    icon: "home",
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
              className={`${styles.featureElement} ${id == 0 && styles.active}`}
            >
              <i
                className={`pi pi-${ele.icon}`}
                style={{ padding: "15px", fontSize: "1.1rem" }}
              ></i>
              <p className={`${styles.featureElement}`}>{ele.name}</p>
            </div>
          );
        })}
      </div>
      <div className={`${styles.lastFeatureContainer}`}>
        <div className={`${styles.lastFeature}`}>
          <i
            className={`pi pi-home`}
            style={{ padding: "12px", fontSize: "1.1rem" }}
          ></i>
          <p className={`${styles.lastFeature}`}>Contact Support</p>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
