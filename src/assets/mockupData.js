const SIX_MONTHS_LABELS = ['07-2022', '08-2022', '09-2022', '10-2022', '11-2022', '12-2022'];
const ONE_YEAR_LABEL = [
  '01-2022',
  '02-2022',
  '03-2022',
  '04-2022',
  '05-2022',
  '06-2022',
  ...SIX_MONTHS_LABELS,
];
const TWO_YEARS_LABELS = [
  '01-2021',
  '02-2021',
  '03-2021',
  '04-2021',
  '05-2021',
  '06-2021',
  '07-2021',
  '08-2021',
  '09-2021',
  '10-2021',
  '11-2021',
  '12-2021',
  ...ONE_YEAR_LABEL,
];
const oneYearTurnupRatioData = {
  labels: ONE_YEAR_LABEL,
  datasets: [
    {
      label: '2021',
      backgroundColor: 'teal',
      data: [99, 98, 99, 97.5, 93, 95, 96, 94.99, 100, 100, 98, 99],
    },
  ],
};

const oneYearSeasonalIncomeData = {
  labels: ONE_YEAR_LABEL,
  datasets: [
    {
      data: [19657, 19623, 19917, 19601, 19456, 20089, 20710, 21220, 20112, 20777, 22067, 23815],
      fill: false,
    },
  ],
};

const threeYearsSeasonalIncomeData = {
  labels: [
    '01-2020',
    '02-2020',
    '03-2020',
    '04-2020',
    '05-2020',
    '06-2020',
    '07-2020',
    '08-2020',
    '09-2020',
    '10-2020',
    '11-2020',
    '12-2020',
    TWO_YEARS_LABELS,
  ],
  datasets: [
    {
      data: [
        10239,
        10229,
        10293,
        11390,
        12948,
        12928,
        13920,
        13902,
        13928,
        15929,
        16029,
        17039,
        18657,
        18623,
        18117,
        18601,
        18025,
        16198,
        19232,
        21392,
        23923,
        22777,
        21067,
        20815,
        ...oneYearSeasonalIncomeData.datasets[0].data,
      ],
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

const sixMonthsGuestPerCountryData = {
  labels: SIX_MONTHS_LABELS,
  datasets: [
    {
      label: 'USA',
      data: [1, 2, 2, 9, 6, 8],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'China',
      data: [12, 12, 10, 12, 10, 12],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'Russia',
      data: [5, 1, 2, 5, 4, 6],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'Europe',
      data: [4, 8, 11, 12, 13, 23],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
  ],
};

const oneYearGuestPerCountryData = {
  labels: ONE_YEAR_LABEL,
  datasets: [
    {
      label: 'USA',
      data: [15, 4, 2, 3, 2, 1, ...sixMonthsGuestPerCountryData.datasets[0].data],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'China',
      data: [12, 10, 12, 11, 9, 11, ...sixMonthsGuestPerCountryData.datasets[1].data],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'Russia',
      data: [2, 2, 4, 2, 1, 4, ...sixMonthsGuestPerCountryData.datasets[2].data],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'Europe',
      data: [28, 10, 10, 5, 6, 7, ...sixMonthsGuestPerCountryData.datasets[3].data],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
  ],
};

const twoYearsGuestPerCountryData = {
  labels: TWO_YEARS_LABELS,
  datasets: [
    {
      label: 'USA',
      data: [
        16,
        13,
        2,
        1,
        2,
        1,
        4,
        5,
        1,
        2,
        10,
        13,
        15,
        ...oneYearGuestPerCountryData.datasets[0].data,
      ],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'China',
      data: [
        10,
        15,
        10,
        9,
        12,
        12,
        11,
        11,
        10,
        9,
        8,
        9,
        ...oneYearGuestPerCountryData.datasets[1].data,
      ],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'Russia',
      data: [4, 3, 1, 2, 1, 1, 2, 2, 3, 2, 3, 1, ...oneYearGuestPerCountryData.datasets[2].data],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
    {
      label: 'Europe',
      data: [
        10,
        9,
        5,
        2,
        3,
        4,
        5,
        6,
        10,
        15,
        24,
        24,
        ...oneYearGuestPerCountryData.datasets[3].data,
      ],
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
    },
  ],
};

export {
  oneYearTurnupRatioData,
  sixMonthsGuestPerCountryData,
  oneYearGuestPerCountryData,
  twoYearsGuestPerCountryData,
  oneYearSeasonalIncomeData,
  threeYearsSeasonalIncomeData,
  pieData,
};
