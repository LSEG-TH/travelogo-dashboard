import React, { useEffect } from 'react';

function LineChart({ className, value, onChange, title }) {
  useEffect(() => {});
  const selectRef = React.useRef(); // grab a DOM reference to our `ef-select`

  React.useLayoutEffect(() => {
    const data = {
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
    const { current } = selectRef;

    const handleChange = (event) => {
      onChange(event.detail.value);
    };
    current.config = data;
    current.value = data;
    current.addEventListener('value-changed', handleChange);

    return () => current.removeEventListener('value-changed', handleChange);
  }, [selectRef, onChange, title, value]);

  return <ef-chart ref={selectRef} id='line'></ef-chart>;
}

export default LineChart;
