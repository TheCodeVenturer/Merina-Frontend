"use client";
import styles from "./analytics.module.scss";
import { Chart } from "chart.js";
import { Chart as PrimeChart } from "primereact/chart";
import { useState, useEffect } from "react";
import * as ChartGeo from "chartjs-chart-geo";
import { FaChevronDown } from "react-icons/fa6";

Chart.register(
  ChartGeo.ChoroplethController, 
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);

// Normally chart.js has no implementation for Maps
// By Installing chatjs-chart-geo we can get this feature
// Next we have to register the new features to the Chart.js , in simple words adding the chartjs-chart-geo plugin to chart.js

function top10(worldData) {
  //sort the countries in decreasing order of new users and return thetop 10
  let countryNames = Object.keys(worldData);
  countryNames.sort((a, b) => {
    return -(worldData[a].New_User - worldData[b].New_User);
  });
  countryNames = countryNames.slice(0, 10);
  return countryNames;
}

const UserbyLocation = ({ worldData }) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const countryNames = top10(worldData);
  useEffect(() => {
    const handle = async () => {
      // Fetching this to get all countries details to use with chartjs-chart-geo
      const response = await fetch(
        "https://unpkg.com/world-atlas/countries-50m.json"
      );
      const mapData = await response.json();

      //extracting countries from the mapData using ChartJs-Geo topojson.feature
      const countries = ChartGeo.topojson.feature(
        mapData,
        mapData.objects.countries
      ).features;

      const data = {
        datasets: [
          {
            // label: "Countries",   // To show Map Label
            data: countries.map((ele) => {
              return {
                feature: ele,
              };
            }),
            backgroundColor: "#7882A4",
            hoverBackgroundColor: "#7950f2",
            borderColor: "white",
            borderWidth: 0.2, // sets borders width, here setting country border width
          },
        ],
      };

      // console.log(data);
      const options = {
        // showOutline: true, // to show the outline
        // showGraticule: true, // to show the scale
        colors: ["#FF0000"],
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleAlign: "center",
            bodyAlign: "center",
            callbacks: {
              title: function (context) {
                return (
                  countries[context[0].dataIndex].properties.name +
                  " last 24 hrs"
                );
              },
              afterTitle: function (context) { // sets After title to add new data to Tooltip
                const countryName =
                  countries[context[0].dataIndex].properties.name;
                let value = `0`;
                if (worldData.hasOwnProperty(countryName)) {
                  const { Current_User, New_User } = worldData[countryName];
                  value = `${formatNumber(Current_User)}`;
                }
                return value;
              },
              label: function (context) {
                const countryName =
                  countries[context.dataIndex].properties.name;
                let value = "";
                if (worldData.hasOwnProperty(countryName)) {
                  const { Current_User, New_User } = worldData[countryName];
                  value = `+${formatNumber(New_User)}`;
                }
                return value;
              },
              labelTextColor: () => {
                return "green";
              },
            },
            displayColors: false,
            yAlign: "bottom",
          },
        },
        scales: {
          projection: {
            axis: "x",
            projection: "equalEarth",   //used to display the Earth on a flat surface
          },
          color: {
            axis: "XY",   //specifies that the chart should have both an X and a Y axis
            display: false,
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    };
    handle();
  }, []);
  return (
    <div className={styles.userbyLocation}>
      <div className={styles.worldChart}>
        <h3>User by Location</h3>
        {/* Here using PrimeChart which is actually the Prime/Chart Component, used this as to Register chartjs-chart-geo feature on Chart.js imported as Chart*/}
        <PrimeChart
          type="choropleth"
          data={chartData}
          options={chartOptions}
          className={styles.chart}
        />
      </div>
      <div className={styles.top10}>
        <h3>Top 10 Country</h3>
        <div className={styles.heading}>
          <div>
            Country{" "}
            <span className={styles.icon}>
              <FaChevronDown />
            </span>
          </div>
          <div>Visit</div>
        </div>
        <div className={styles.countries}>
          {countryNames.map((ele, idx) => {
            return (
              <div key={idx} className={styles.countryUserData}>
                <div>{ele}</div>
                <div>{worldData[ele].New_User}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserbyLocation;

//Number Formatter
// 1500 -> 1.5k
// 900 -> 900
// 1500000 -> 1.5M

function formatNumber(num) {
  if (num >= 1000000) {
    return (
      (num % 1000000 === 0
        ? (num / 1000000).toFixed(0)
        : (num / 1000000).toFixed(1)) + "M"
    );
  } else if (num >= 1000) {
    return (
      (num % 1000 === 0 ? (num / 1000).toFixed(0) : (num / 1000).toFixed(1)) +
      "k"
    );
  } else {
    return num.toString();
  }
}
