import { SIX_MONTHS_LABELS, ONE_YEAR_LABEL, TWO_YEARS_LABELS } from './label';

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

export { sixMonthsGuestPerCountryData, oneYearGuestPerCountryData, twoYearsGuestPerCountryData };
