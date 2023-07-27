import { Chart } from '@refinitiv-ui/elements/chart';
import { ChartConfiguration } from 'chart.js';
import React, { useEffect } from 'react';

interface Props {
  value: any;
  title: string;
  onChange: (x: () => void) => void;
  className?: string;
}

function BarChart({ className, value, onChange, title }: Props) {
  useEffect(() => {});
  const selectRef = React.useRef<Chart>(); // grab a DOM reference to our `ef-select`

  React.useLayoutEffect(() => {
    const data: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Order', 'Customer'],
        datasets: [
          {
            label: '2022',
            data: [29321, 107905],
          },
          {
            label: '2023',
            data: [65225, 88249],
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const year = tooltipItem.label;
                let rev = tooltipItem.raw as string;
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

export default BarChart;
