import Chart from './Chart';

function LineChart({ data, title, yAxisLabel, displayLegend = false }) {
  const config = {
    type: 'line',
    data,
    options: {
      plugins: {
        title: {
          text: title,
        },
        legend: {
          display: displayLegend,
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: yAxisLabel,
          },
        },
      },
    },
  };

  return <Chart config={config}></Chart>;
}

export default LineChart;
