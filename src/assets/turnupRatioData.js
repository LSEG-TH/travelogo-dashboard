import { SIX_MONTHS_LABELS, ONE_YEAR_LABEL, TWO_YEARS_LABELS } from './label';

export const sixMonthsTurnupRatioData = {
  labels: SIX_MONTHS_LABELS,
  datasets: [
    {
      backgroundColor: '#9BD0F5',
      data: [99, 98, 99, 97.5, 93, 95],
    },
  ],
};

export const oneYearTurnupRatioData = {
  labels: ONE_YEAR_LABEL,
  datasets: [
    {
      backgroundColor: '#9BD0F5',
      data: [99, 98, 99, 97.5, 93, 95, 96, 94.99, 100, 100, 98, 99],
    },
  ],
};

export const twoYearsTurnupRatioData = {
  labels: TWO_YEARS_LABELS,
  datasets: [
    {
      backgroundColor: '#9BD0F5',
      data: [
        99, 98, 99, 97.5, 93, 95, 96, 94.99, 100, 100, 98, 99, 99, 98, 99, 97.5, 93, 95, 96, 94.99,
        100, 100, 98, 99,
      ],
    },
  ],
};
