const barData = {
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
};

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Price',
      data: [37.4, 36.6, 40.48, 41.13, 42.05, 40.42, 43.09],
      fill: false,
    },
  ],
};

const pieData = {
  labels: ['Americas', 'Europe'],
  datasets: [
    {
      data: [60, 40],
    },
  ],
};

export { barData, lineData, pieData };
