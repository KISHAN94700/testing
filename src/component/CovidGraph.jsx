import React from 'react'
import { useState, useEffect } from 'react';
import { Chart } from 'chart.js';
import axios from 'axios';

const CovidGraph = () => {

    const [covidData, setCovidData] = useState([]);

//     useEffect(() => {
//       fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
//       .then((resd) => resd.json())
//       .then((covidData) => setCovidData(covidData));
//     }, []);
// console.log(covidData);

useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      setCovidData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
//  console.log(covidData)

useEffect(() => {
    const ctx = document.getElementById('covidChart').getContext('2d');
  
    if (covidData.length > 0) {
      
      new Chart(ctx, {
        type: 'line',
        covidData: {
          datasets: [{
            label: 'COVID-19 Cases',
            covidData: cases,
            covidData:deaths,
            covidData:recovered,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }]
        },
      });
    }
  }, [covidData]);

  return (
    <div>
      <canvas id="covidChart"></canvas>
    </div>
  )
}

export default CovidGraph
