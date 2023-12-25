"use client";
import styles from "./analytics.module.scss";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { Button } from "primereact/button";

// Using Chart Component from Primereact as it is a React Component, Playing with vanilla chart.js requires you to play with canvas tag, and other javascript selector
// Using this component removes the tedious problem from between

const OverallAnalytics = ({ graphData, Total }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // console.log(graphData);
    const data = {
      labels: graphData.map((ele) => ele.Month),   // extracting labels from graphData
      datasets: [
        {
          data: graphData.map((ele) => ele.Users),  // extracting the data from graphData Object
          backgroundColor: "#7950f2",
          barPercentage: 0.5,                       //sets Bar Width Default is 0.9
          // hoverBackgroundColor: 'red',           // Change Hover Background Colour of Bars
        },
      ],
    };
    const options = {
      responsive: true,                           // set this to true for making the canvas dynamic to layouts for responsiveness
      maintainAspectRatio: false,                 // ignores the x:y ratio to support responsiveness
      scales: {
        y: {
          beginAtZero: true,                       // y-label starts at zero
        },
      },
      plugins: {
        legend: {
          display: false,                         // hide the legend , Here the Graph Name
        },
        tooltip: {                                //edit tooltip
          callbacks: {
            title: function () {                  // By Default the x-value is title setting it to ""
              return "";
            },
            label: function (context) {
              var label = "";
              if (context.parsed.y !== null) {    // By Default the y-value is label setting it to the required configuration
                label = context.parsed.y + " Users";
              }
              return label;
            },
          },
          displayColors: false,                   // remove the colors from tooltip default is true           
          yAlign: "bottom",                       // sets the direction of tooltip
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
      <Chart
        type="bar"                                 // Rendering Bar Chart
        data={chartData}
        options={chartOptions}
        className={styles.chart}
      />
      <div className={styles.buttonCards}>
        <div className="card flex justify-content-center">
          <Button
            label="Number of Stories published"
            className={`${styles.card} ${styles.active}`}
          />
        </div>
        <div className="card flex justify-content-center">
          <Button label="Number of article published" className={styles.card} />
        </div>
        <div className="card flex justify-content-center">
          <Button label="Number of saved articles" className={styles.card} />
        </div>
        <div className="card flex justify-content-center">
          <Button label="Number of article shared" className={styles.card} />
        </div>
      </div>
    </div>
  );
};

export default OverallAnalytics;
