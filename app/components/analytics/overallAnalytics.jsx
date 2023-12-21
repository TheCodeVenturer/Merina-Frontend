"use client";
import styles from "./analytics.module.scss"
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";

const OverallAnalytics = ({ graphData, Total }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // console.log(graphData);
    const data = {
      labels: graphData.map((ele) => ele.Month),
      datasets: [
        {
          data: graphData.map((ele) => ele.Users),
          backgroundColor: "#7950f2",
          barPercentage: 0.5,
          // hoverBackgroundColor: 'red',
        },
      ],
    };
    const options = {
      responsive: true,
      maintainAspectRatio : false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function () {
              return "";
            },
            label: function (context) {
              var label = "";
              if (context.parsed.y !== null) {
                label = context.parsed.y + " Users";
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
    <div className={styles.overallAnalytics}>
      <div>
      <h3>Overall Analytics</h3>
      <h4>{Total.toLocaleString()}</h4>
      </div>
      <Chart type="bar" data={chartData} options={chartOptions} className={styles.chart}/>
      <div className={styles.buttonCards}>
      <div className="card flex justify-content-center">
            <Button label="Number of Stories published" className={`${styles.card} ${styles.active}`}/>
        </div>
        <div className="card flex justify-content-center">
            <Button label="Number of article published" className={styles.card}/>
        </div>
        <div className="card flex justify-content-center">
            <Button label="Number of saved articles" className={styles.card}/>
        </div>
        <div className="card flex justify-content-center">
            <Button label="Number of article shared" className={styles.card}/>
        </div>
      </div>
    </div>
  );
};

export default OverallAnalytics;
