"use client";
import styles from "./analytics.module.scss"
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { FaRegEye } from "react-icons/fa";
const Micropayments = ({ graphData,Total }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: graphData.map((ele) => ele.Time), // extracting labels from graphData
      datasets: [
        {
          data: graphData.map((ele) => ele.User),
          borderColor: "#A0A3BD",
          tension: 0.4,
          // sets how much the line will be bent to follow the points converting the graph from saw teeth -> functional or generally converting a discctinous function to continous function
          pointBorderColor: "rgba(0, 0, 0, 0)", // sets the Border colour of the points setting to transparent
          pointBackgroundColor: "rgba(0, 0, 0, 0)", // sets the Background colour of the points setting to transparent
          pointHoverBackgroundColor: "#9297ca", // sets background colour on hover
        },
      ],
    };
    const options = {
      responsive: true, // set this to true for making the canvas dynamic to layouts for responsiveness
      maintainAspectRatio : false, // ignores the x:y ratio to support responsiveness
      hover: {
        intersect: false, 
        // set to false, which highlights the nearest point when hovering over the graph
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          titleFont: {
            size: 15,   // setting toltip title font
          },
          // bodyFont: {
          //   size: 50
          // },
          titleAlign: "center", //center the title inside tooltip
          bodyAlign: "center",  //center the body inside tooltip
          callbacks: {
            title: (context) => {
              return `${context[0].raw} User`;
            },
            label: (tooltipItem) => `Time: ${tooltipItem.parsed.x}`,
            labelTextColor: () => "#ab8aff",  //setting label Text Color
          },
          displayColors: false,
          yAlign: "bottom",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          type: "linear",    
          // Makes the Labels lineaar from 7.6 -> 7 e.g., [7.1,7.6,8.1] -> [7,8,9]
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className={styles.sectionTwoChild}>
      <div>
        <div className={styles.heading}>
          <h3>MicroPayments</h3>
            <p>
            <FaRegEye className={styles.icon}/>
            </p>
        </div>
        <p>Revenue</p>
        <h4>${Total.toLocaleString()}</h4>
      </div>
      <Chart type="line" data={chartData} options={chartOptions} className={styles.chart}/>
    </div>
  );
};

export default Micropayments;
