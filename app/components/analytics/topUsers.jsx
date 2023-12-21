import styles from "./analytics.module.scss";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
const TopUsers = ({data}) => {
  return (
    <div className={styles.topUsers}>
      <div className={styles.heading}>
        <h3>Top user in last 30 days</h3>
        <Link href="#">View All</Link>
      </div>
      <div className={styles.topUsersContainer}>
        {data.map((ele, idx) => {
          return (
            <div key={idx} className={styles.topUser}>
              <div className={styles.userInfo}>
                <img
                  src={ele.Image}
                  alt={ele.User_Name}
                  className={styles.userImage}
                />
                <div>
                  <h4>{ele.User_Name}</h4>
                  <p>
                    {ele.Purchased} Article Purchased | {ele.Saved} saved
                  </p>
                </div>
              </div>
              <div className={styles.icon} >
              <MdOutlineMail />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopUsers;
