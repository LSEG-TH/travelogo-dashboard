import React from 'react';
import Chart from './Chart';

function LineChart({ data, title }) {
  const config = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Price',
          data: [37.4, 36.6, 40.48, 41.13, 42.05, 40.42, 43.09],
          fill: false,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: title,
        },
        legend: {
          // only required when importing chart.js/auto
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return tooltipItem.formattedValue + ' $';
            },
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Price ($)',
          },
        },
      },
    },
  };

  return <Chart id='line' config={config}></Chart>;
}

export default LineChart;
