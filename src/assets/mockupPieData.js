const visitorTypeData = {
  labels: ['Solo', 'Friends', 'Family'],
  datasets: [
    {
      data: [17, 40, 43],
    },
  ],
};

const roomTypesData = {
  labels: ['Standard', 'Deluxe', 'Villa'],
  datasets: [
    {
      data: [50, 32, 18],
      backgroundColor: ['#A3204C', '#174A66', '#AF583A'],
      borderColor: ['#A3204C', '#174A66', '#AF583A'],
    },
  ],
};

const visitPurposeData = {
  labels: ['Leisure', 'Work'],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ['#236F99', '#116262'],
      borderColor: ['#236F99', '#116262'],
    },
  ],
};

const stayingLengthData = {
  labels: ['1 Day', '2 Days', '1 Week', '1 Month'],
  datasets: [
    {
      data: [26, 48, 20, 6],
    },
  ],
};

export { visitPurposeData, visitorTypeData, roomTypesData, stayingLengthData };
