import { ONE_YEAR_LABEL, TWO_YEARS_LABELS } from './label';

const seasonalChartOptions = {
  tension: 0.3,
  fill: true,
};

export const oneYearSeasonalIncomeData = {
  labels: ONE_YEAR_LABEL,
  datasets: [
    {
      ...seasonalChartOptions,
      data: [19657, 19623, 19917, 19601, 19456, 20089, 20710, 21220, 20112, 20777, 22067, 23815],
    },
  ],
};

export const threeYearsSeasonalIncomeData = {
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
    ...TWO_YEARS_LABELS,
  ],
  datasets: [
    {
      ...seasonalChartOptions,
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
    },
  ],
};
