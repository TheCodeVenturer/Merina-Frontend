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
      labels: graphData.map((ele) => ele.Time),
      datasets: [
        {
          data: graphData.map((ele) => ele.User),
          fill: false,
          borderColor: "#A0A3BD",
          tension: 0.4,
          pointBorderColor: "rgba(0, 0, 0, 0)",
          pointBackgroundColor: "rgba(0, 0, 0, 0)",
          pointHoverBackgroundColor: "#9297ca",
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio : false,
      hover: {
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          titleFont: {
            size: 15,
          },
          // bodyFont: {
          //   size: 50
          // },
          titleAlign: "center",
          bodyAlign: "center",
          callbacks: {
            title: (context) => {
              return `${context[0].raw} User`;
            },
            label: (tooltipItem) => `Time: ${tooltipItem.parsed.x}`,
            labelTextColor: () => "#ab8aff",
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
