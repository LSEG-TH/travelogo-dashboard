import React from 'react';
import Chart from './Chart';

function LineChart({ data, title }) {
  const config = {
    type: 'line',
    data,
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

  return <Chart config={config}></Chart>;
}

export default LineChart;
