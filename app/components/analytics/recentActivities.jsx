import styles from "./analytics.module.scss"
import Link from "next/link";

import { IoNotifications } from "react-icons/io5";

const RecentActivities = ({data}) => {
  return (
    <div className={styles.recentActivityContainer}>
      <div className={styles.heading}>
        <h3>Recent Activities</h3>
        <Link href="#">View All</Link>
      </div>
      <div className={styles.recentActivitiesPost}>
        {data.map((ele,idx)=>{
          return (
            <div key={idx} className={styles.activity}>
              <div className={styles.icon}>
                <IoNotifications/>
              </div>
              <div className={styles.contentContainer}>
                <div className={styles.contentDetails}>
                  <span>{ele.Time}</span>
                  <span>{ele.User_Type}</span>
                  <span>{ele.User_Name}</span>
                </div>
                <div className={styles.content}>{ele.content}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default RecentActivities;