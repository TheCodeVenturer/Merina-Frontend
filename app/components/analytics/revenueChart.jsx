"use client";

import React, { useState, useEffect } from "react";
import styles from "./analytics.module.scss";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";

const RevenueChart = ({ graphData, Total }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: graphData.map((ele) => ele.Year),
      datasets: [
        {
          data: graphData.map((ele) => ele.Revenue),
          backgroundColor: "#E8E9FF",
          hoverBackgroundColor: "#7950f2",
          borderRadius: 200,
          barPercentage: 0.35,
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio : false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (val, index) {
              return `$${val}`;
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
                label = "Revenue: $" + context.parsed.y;
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
    <div className={styles.revenueChart}>
      <div>
        <h3>Revenue Chart</h3>
        <h4>${Total}</h4>
      </div>
      <div className={styles.buttonSections}>
        <div className="card flex justify-content-center">
          <Button
            label="Revenue chart by year"
            className={`${styles.section} ${styles.active}`}
          />
        </div>
        <div className="card flex justify-content-center">
          <Button label="Revenue chart by Month" className={styles.section} />
        </div>
      </div>
      <Chart type="bar" data={chartData} options={chartOptions} className={styles.chart}/>
    </div>
  );
};

export default RevenueChart;
