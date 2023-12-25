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
      labels: graphData.map((ele) => ele.Year), // extracting labels from graphData
      datasets: [
        {
          data: graphData.map((ele) => ele.Revenue), // extracting the data from graphData Object
          backgroundColor: "#E8E9FF",
          hoverBackgroundColor: "#7950f2",
          borderRadius: 200,      //sets the bar rounded at top
          barPercentage: 0.35,    //sets Bar Width Default is 0.9
        },
      ],
    };
    const options = {
      responsive: true, // set this to true for making the canvas dynamic to layouts for responsiveness
      maintainAspectRatio : false, // ignores the x:y ratio
      scales: {
        y: {
          beginAtZero: true, // y-label starts at zero
          ticks: {
            callback: function (val, index) {
              return `$${val}`;   // Update the y-labels to customised y-label
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          caretSize: 0,     // removes the teeth of tooltip
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
