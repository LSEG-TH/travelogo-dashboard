const visitorTypeData = {
  labels: ['solo', 'friends', 'family'],
  datasets: [
    {
      data: [17, 40, 43],
    },
  ],
};

const roomTypesData = {
  labels: ['standard', 'deluxe', 'villa'],
  datasets: [
    {
      data: [50, 32, 18],
      backgroundColor: ['#A3204C', '#174A66', '#AF583A'],
      borderColor: ['#A3204C', '#174A66', '#AF583A'],
    },
  ],
};

const visitPurposeData = {
  labels: ['leisure', 'work'],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ['#236F99', '#116262'],
      borderColor: ['#236F99', '#116262'],
    },
  ],
};

const stayingLengthData = {
  labels: ['1 day', '2 days', '1 Week', '1 Month'],
  datasets: [
    {
      data: [26, 48, 20, 6],
    },
  ],
};

export { visitPurposeData, visitorTypeData, roomTypesData, stayingLengthData };
