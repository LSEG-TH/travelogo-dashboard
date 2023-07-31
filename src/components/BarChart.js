import React from 'react';
import Chart from './Chart';

function BarChart({ data, title }) {
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          title: {
            display: true,
            text: 'Turn up ratio (%)',
          },
        },
      },
    },
  };

  return <Chart config={config} title={title}></Chart>;
}

export default BarChart;
