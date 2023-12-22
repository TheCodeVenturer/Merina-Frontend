import styles from "./dashboard.module.scss"
import { FaRegEye, FaUserPlus } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
const Activity = () => {
  return (
    <div className={styles.activityContainer}>
      <ActivityCard content="Active User" rate={23.8} month="October" value="1.64k"><FaRegEye/></ActivityCard>
      <ActivityCard content="New User" rate={-23.8} month="October" value="4565"><BsPeopleFill/></ActivityCard>
      <ActivityCard content="Repeat User" rate={23.8} month="October" value="23.3k"><FaUserPlus/></ActivityCard>
      <ActivityCard content="Total Revenue" rate={+34} month="October" value="$45.64k"><AiOutlineDollar /></ActivityCard>
    </div>
  );
};

export default Activity;


const ActivityCard = ({children,content,rate,month,value})=>{
  return(
    <div className={styles.card}>
      <div>
        <div className={styles.icon}>
        {children}
        </div>
        <p className={styles.content}>{content}</p>
        <p className={styles.rate}><span style={{color:`${rate>0?'green':'red'}`}}>{rate>0 && '+'}{rate}%</span> From {month}</p>
      </div>
      <h4>{value}</h4>
    </div>
  )
}