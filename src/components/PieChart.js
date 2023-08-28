import Chart from './Chart';

function PieChart({ data, className = 'max-h-36' }) {
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

  return <Chart config={config} className={className}></Chart>;
}

export default PieChart;
