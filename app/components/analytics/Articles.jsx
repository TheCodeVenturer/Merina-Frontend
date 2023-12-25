'use client'
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import styles from "./analytics.module.scss"
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Articles = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [currentItems, setCurrentItems] = useState([])

  useEffect(()=>{
    const updatedCurrentItems = data.slice((currentIndex-1)*4,currentIndex*4); // sets only 4 or less elements in the array
    setCurrentItems(updatedCurrentItems);
  },[currentIndex])
  return (
    <div className={styles.articles}>
      <h3>Top stories in last 30 days</h3>
      <div className={styles.buttonSections}>
        <div className="card flex justify-content-center">
          <Button
            label="Latest Articles"
            className={`${styles.section} ${styles.active}`}
          />
        </div>
        <div className="card flex justify-content-center">
          <Button label="Popular Articles" className={styles.section} />
        </div>
        <div className="card flex justify-content-center">
          <Button label="Trending Articles" className={styles.section} />
        </div>
      </div>
      <table >
        <thead>
          <tr>
            <td>Title</td>
            <td>Story Views</td>
            <td>Paywall Clicks</td>
            <td>Purchase Amount</td>
            <td>Read</td>
          </tr>
        </thead>
        <tbody >
        {currentItems.map((ele,idx)=>{
          return (
          <tr key={idx} >
            <td >{ele.Title.length>38?`${ele.Title.substring(0,35)}...`:ele.Title}</td> {/* Helps to show the string in shorter size to overcome overflow or decline in UX*/}
            <td >{ele.StoryViews}</td>
            <td >{ele.PaywallClicks}</td>
            <td >{ele.PurchaseAmount}</td>
            <td >
              <Link href={ele.slug}> {/* Used Link Component for future implementation  of the Specific-Article*/}
                <FaExternalLinkAlt style={{color:"#7950f2"}}/>
              </Link>
              </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      <div className={styles.tableFunctions}>
        <div>
          Showing {currentIndex} out of {Math.ceil(data.length/4)}  
        </div>
        <div className={`card flex flex-wrap justify-content-center gap-3 ${styles.buttonBox}`} >
          <div  className={styles.functionButton}>
            <Button icon="pi pi-chevron-left" onClick={()=>{ {/* Update the table row with previous elements */}
              setCurrentIndex(currentIndex-1);
            }} disabled={currentIndex===1}/>
            </div>
            <p>{currentIndex}</p>
            <div  className={styles.functionButton}>

            <Button icon="pi pi-chevron-right" onClick={()=>{ {/* Update the table row with next elements */}
              setCurrentIndex(currentIndex+1);
            }} disabled={currentIndex===Math.ceil(data.length/4)}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;