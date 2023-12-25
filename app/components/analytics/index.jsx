//this is the Analytics Component imported to main page.js 


import styles from "./analytics.module.scss"
import RevenueChart from "./revenueChart"
import OverallAnalytics from "./overallAnalytics"
import Micropayments from "./micropayments"
import MonthlySubscriber from "./monthlySubscriber"
import YearlySubscriber from "./yearlySubscriber"
import Articles from "./Articles"
import RecentActivities from "./recentActivities"
import TopUsers from "./topUsers"
import UserbyLocation from "./userbyLocation"
import data from "../../data.json"

const fetchData = async () =>{
  // This fetches the data from the api end point
  const res = await fetch("https://api.npoint.io/5f754613678cbebe119c")
  const data = await res.json()
  return data
}

const Analytics = async () => {
  const analyticsData = await fetchData()
  // console.log(analyticsData.Overall_Analytics.GraphData);
  return (
    <div className={styles.analytics}>
      <div className={styles.sectionOne}>
      {analyticsData.Overall_Analytics && <OverallAnalytics graphData={analyticsData.Overall_Analytics.GraphData} Total={analyticsData.Overall_Analytics.Total}/>}
      {analyticsData.RevenueGraph && <RevenueChart graphData = {analyticsData.RevenueGraph.GraphData} Total={analyticsData.RevenueGraph.Total}/>}
      </div>
      <div className={styles.sectionTwo}>
        {analyticsData.Micro_Payment && <Micropayments graphData={analyticsData.Micro_Payment.GraphData} Total={analyticsData.Micro_Payment.Total}/>}
        {analyticsData.Monthly_Subscriber && <MonthlySubscriber graphData={analyticsData.Monthly_Subscriber.GraphData} Total={analyticsData.Monthly_Subscriber.Total}/>}
        {analyticsData.yearly_Subscriber && <YearlySubscriber graphData={analyticsData.yearly_Subscriber.GraphData} Total={analyticsData.yearly_Subscriber.Total}/>}
      </div>
      <div className={styles.sectionThree}>
        {analyticsData.ArticleTable && <Articles data = {analyticsData.ArticleTable}/>}
        {data.Recent_Activities && <RecentActivities data={data.Recent_Activities}/>}
      </div>
      <div className={styles.sectionFour}>
        {data.Top_User && <TopUsers data = {data.Top_User}/>}
        {data.User_By_Location && <UserbyLocation worldData={data.User_By_Location}/>}
      </div>
    </div>
  );
};

export default Analytics;