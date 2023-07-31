import React from 'react';
import Chart from './Chart';

function PieChart({ data }) {
  const config = {
    type: 'pie',
    data,
    options: {
      plugins: {
        tooltip: {
          callbacks: {
            title: () => null,
            label: (tooltipItem) => {
              const result = tooltipItem.raw;
              const title = tooltipItem.label;
              return title + ': ' + result + '%';
            },
          },
        },
      },
    },
  };

  return <Chart config={config}></Chart>;
}

export default PieChart;
