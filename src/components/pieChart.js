import React, { useEffect } from 'react';

function PieChart({ className, value, onChange, title }) {
  useEffect(() => {});
  const selectRef = React.useRef(); // grab a DOM reference to our `ef-select`

  React.useLayoutEffect(() => {
    const data = {
      type: 'pie',
      data: {
        labels: ['Americas', 'Europe'],
        datasets: [
          {
            data: [60, 40],
          },
        ],
      },
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
    const { current } = selectRef;

    const handleChange = (event) => {
      onChange(event.detail.value);
    };
    current.config = data;
    current.value = data;
    current.addEventListener('value-changed', handleChange);

    return () => current.removeEventListener('value-changed', handleChange);
  }, [selectRef, onChange, title, value]);

  return <ef-chart ref={selectRef} id='pie'></ef-chart>;
}

export default PieChart;
