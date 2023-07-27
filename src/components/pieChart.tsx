import { Chart } from '@refinitiv-ui/elements/chart';
import { ChartConfiguration } from 'chart.js';
import React, { useEffect } from 'react';

interface Props {
  value: any;
  title: string;
  onChange: (x: () => void) => void;
  className?: string;
}

function PieChart({ className, value, onChange, title }: Props) {
  useEffect(() => {});
  const selectRef = React.useRef<Chart>(); // grab a DOM reference to our `ef-select`

  React.useLayoutEffect(() => {
    const data: ChartConfiguration = {
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

    if (!current) {
      return () => undefined;
    }
    current.config = data;
    current.addEventListener('value-changed', handleChange);

    return () => current.removeEventListener('value-changed', handleChange);
  }, [selectRef, onChange, title, value]);

  return <ef-chart ref={selectRef} id='pie'></ef-chart>;
}

export default PieChart;
