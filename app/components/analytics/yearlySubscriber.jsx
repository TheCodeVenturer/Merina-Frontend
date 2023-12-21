"use client";
import React, { useState, useEffect } from "react";
import styles from "./analytics.module.scss";
import { Chart } from "primereact/chart";
import "chartjs-adapter-date-fns";
import { FaCalendarAlt, FaRegEye } from "react-icons/fa";
const YearlySubscriber = ({ graphData, Total }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // console.log(graphData.map((ele)=>ele.Date));
    const data = {
      labels: graphData.map((ele) => ele.Date.split("-").reverse().join("-")),
      datasets: [
        {
          data: graphData.map((ele) => ele.Subscribers),
          fill: false,
          tension: 0.4,
          borderColor: "black",
          borderWidth: 2,
          pointBorderColor: "rgba(0, 0, 0, 0)",
          pointBackgroundColor: "rgba(0, 0, 0, 0)",
          pointHoverBackgroundColor: "black",
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      hover: {
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          titleAlign: "center",
          bodyAlign: "center",
          callbacks: {
            title: (context) => {
              let title = context[0].label.split(",");
              return `${title[0]}, ${title[1]}`;
            },
            label: (tooltipItem) => `${tooltipItem.parsed.y} Subscribers`,
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
          type: "time",
          time: {
            unit: "year",
          },
          bounds: "ticks", // displays bounds even if data is not sufficient
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
          <h3>Yearly Subscriber</h3>
            <p>
              <span>
              2021-2022
              <FaCalendarAlt style={{ padding: "0 4px", color: "#3a1597" }} />
              </span>
            <FaRegEye className={styles.icon}/>
            </p>
        </div>
        <p>Revenue</p>
        <h4>${Total.toLocaleString()}</h4>
      </div>
      <Chart
        type="line"
        data={chartData}
        options={chartOptions}
        className={styles.chart}
      />
    </div>
  );
};

export default YearlySubscriber;
