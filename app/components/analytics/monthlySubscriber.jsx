"use client";
import styles from "./analytics.module.scss";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { FaCalendarAlt, FaRegEye } from "react-icons/fa";

const MonthlySubscriber = ({ graphData, Total }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // console.log(graphData);
    const data = {
      labels: graphData.map((ele, index) => `${index + 1}-1`),
      datasets: [
        {
          data: graphData,
          backgroundColor: "#E8E9FF",
          hoverBackgroundColor: "#7950f2",
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (val, index) {
              return `${val}k`;
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          caretSize: 0,
          callbacks: {
            title: function () {
              return "";
            },
            label: function (context) {
              var label = "";
              if (context.parsed.y !== null) {
                label = +context.parsed.y + "k";
              }
              return label;
            },
          },
          displayColors: false,
          yAlign: "bottom",
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
          <h3>Monthly Subscriber</h3>
          <p>
            <span>
              2021-2022
              <FaCalendarAlt style={{ padding: "0 4px", color: "#3a1597" }} />
            </span>
            <FaRegEye className={styles.icon} />
          </p>
        </div>
        <p>Revenue</p>
        <h4>${Total.toLocaleString()}</h4>
      </div>
      <Chart
        type="bar"
        data={chartData}
        options={chartOptions}
        className={styles.chart}
      />
    </div>
  );
};

export default MonthlySubscriber;
