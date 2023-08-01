import Chart from './Chart';

function BarChart({ data, title, yAxisLabel, displayLegend = false }) {
  const config = {
    type: 'bar',
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
            display: !!yAxisLabel,
            text: yAxisLabel,
          },
        },
      },
    },
  };

  return <Chart config={config}></Chart>;
}

export default BarChart;
