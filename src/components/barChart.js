import React from 'react';
import Chart from './Chart';

function BarChart({ data, title }) {
  const config = {
    type: 'bar',
    data,
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              const year = tooltipItem.label;
              let rev = tooltipItem.raw;
              rev = rev.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
              return year + ': ' + rev;
            },
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 180000,
          ticks: {
            stepSize: 30000,
            callback: (label, index) => {
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            },
          },
          title: {
            display: false,
            text: 'Revenue (in millions £)',
          },
        },
      },
    },
  };

  return <Chart config={config} title={title}></Chart>;
}

export default BarChart;
