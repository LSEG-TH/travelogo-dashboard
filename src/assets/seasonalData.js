const seasonalLabels = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const seasonalChartOptions = {
  tension: 0.5,
};

export const oneYearSeasonalIncomeData = {
  labels: seasonalLabels,
  datasets: [
    {
      ...seasonalChartOptions,
      fill: true,
      label: '2022',
      data: [19657, 19623, 19917, 19601, 19456, 20089, 20710, 21220, 20112, 20777, 22067, 23815],
    },
  ],
};

export const threeYearsSeasonalIncomeData = {
  labels: seasonalLabels,
  datasets: [
    {
      ...seasonalChartOptions,
      fill: true,
      label: '2022',
      data: oneYearSeasonalIncomeData.datasets[0].data,
    },
    {
      ...seasonalChartOptions,
      label: '2021',
      data: [10239, 10229, 10293, 11390, 12948, 12928, 13920, 13902, 13928, 15929, 16029, 17039],
    },
    {
      ...seasonalChartOptions,
      label: '2020',
      data: [18657, 18623, 18117, 18601, 18025, 16198, 19232, 21392, 23923, 22777, 21067, 20815],
    },
  ],
};
