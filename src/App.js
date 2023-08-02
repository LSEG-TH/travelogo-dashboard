import './App.css';

import { useState } from 'react';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Header from './components/Header';
import SparkLineChart from './components/SparkLineChart';
import ButtonBar from './components/ButtonBar';
import ThemeSwitcher from './components/ThemeSwitcher';

import {
  sixMonthsGuestPerCountryData,
  oneYearGuestPerCountryData,
  twoYearsGuestPerCountryData,
} from './assets/guestsPerCountryData';
import {
  sixMonthsTurnupRatioData,
  oneYearTurnupRatioData,
  twoYearsTurnupRatioData,
} from './assets/turnupRatioData';
import { oneYearSeasonalIncomeData, threeYearsSeasonalIncomeData } from './assets/seasonalData';
import {
  roomTypesData,
  stayingLengthData,
  visitPurposeData,
  visitorTypeData,
} from './assets/mockupPieData';
import Icon from './components/Icon';

function App() {
  const [turnupRatio, setTurnupRatio] = useState(oneYearTurnupRatioData);
  const [seasonalIncome, setSeasonalIncome] = useState(oneYearSeasonalIncomeData);
  const [guestPerCountry, setGuestPerCountry] = useState(oneYearGuestPerCountryData);

  // * Replace mockup data with
  // const [chartData, setChartData] = useState({});
  // useEffect(() => {
  //   const getChartData = async () => {
  //     const URL = 'https://www.getData.com';
  //     const { data } = await axios.get(URL);
  //     setChartData(data);
  //   }
  //   getChartData();
  // })

  const getOneYearIncome = () => {
    return oneYearSeasonalIncomeData.datasets[0].data;
  };

  const getAverageMonthly = () => {
    const sum = getOneYearIncome().reduce((a, b) => a + b);
    const average = sum / 12;
    return average.toLocaleString();
  };

  const handleSeasonalIncomeDataChange = (event) => {
    if (event.target.getAttribute('name') === '3y') {
      setSeasonalIncome(threeYearsSeasonalIncomeData);
    } else {
      setSeasonalIncome(oneYearSeasonalIncomeData);
    }
  };

  const handleTurnupRatioChange = (event) => {
    const duration = event.target.getAttribute('name');
    switch (duration) {
      case '2y':
        setTurnupRatio(twoYearsTurnupRatioData);
        break;
      case '1y':
        setTurnupRatio(oneYearTurnupRatioData);
        break;
      case '6m':
        setTurnupRatio(sixMonthsTurnupRatioData);
        break;
      // no default
    }
  };

  const handleGuestsPerCountryChange = (event) => {
    const duration = event.target.getAttribute('name');
    switch (duration) {
      case '2y':
        setGuestPerCountry(twoYearsGuestPerCountryData);
        break;
      case '1y':
        setGuestPerCountry(oneYearGuestPerCountryData);
        break;
      case '6m':
        setGuestPerCountry(sixMonthsGuestPerCountryData);
        break;
      default:
        break;
    }
  };

  return (
    <div className='App'>
      <Header className='flex-none mb-4 font-bold text-sm h-9'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center'>
            <Icon className='mr-2' icon='home'></Icon> Hotel Name - Powered By TRAVELOGO v1.3.1
          </div>
          <ThemeSwitcher></ThemeSwitcher>
        </div>
      </Header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-1 gap-4'>
        <div className='grid col-span-2 chart-container'>
          <Header className='mb-4'>
            Seasonal Income ($)
            <ButtonBar managed slot='right' className='mr-1' ontap={handleSeasonalIncomeDataChange}>
              <ef-button name='3y' toggles>
                3Y
              </ef-button>
              <ef-button name='1y' active toggles>
                1Y
              </ef-button>
            </ButtonBar>
          </Header>
          <LineChart data={seasonalIncome} yAxisLabel={'Income ($)'} displayLegend />
        </div>
        <div className='grid col-span-2 chart-container'>
          <Header className='mb-4'>
            Turn up ratio (%)
            <ButtonBar managed slot='right' className='mr-1' ontap={handleTurnupRatioChange}>
              <ef-button name='2y' toggles>
                2Y
              </ef-button>
              <ef-button name='1y' active toggles>
                1Y
              </ef-button>
              <ef-button name='6m' toggles>
                6M
              </ef-button>
            </ButtonBar>
          </Header>
          <BarChart data={turnupRatio} yAxisLabel={'Turn up ratio (%)'} />
        </div>
        <div className='flex flex-col order-first col-span-2 row-span-2 lg:order-none lg:col-span-1 text-center'>
          <div className='flex flex-col grow items-center justify-center accent-bg'>
            <div>
              <h1 className='text-xl'>Average Rating</h1>
              <h1 className='text-6xl'>8.1/10</h1>
            </div>
          </div>
          <div className='flex flex-col grow items-center justify-center'>
            <div>
              <h1 className='text-xl'>Average Monthly $</h1>
              <h1 className='text-4xl'>${getAverageMonthly()}</h1>
            </div>
            <SparkLineChart
              className='w-full h-44 pt-6'
              data={getOneYearIncome()}
              referenceValue={10000}
            ></SparkLineChart>
          </div>
          <div className='flex flex-col grow items-center justify-center'>
            <div>
              <h1 className='text-xl'>ESG (By LSEG)</h1>
              <h1 className='text-6xl'>6.5</h1>
            </div>
          </div>
        </div>
        <div className='grid col-span-2 chart-container'>
          <Header>
            Guests per country
            <ButtonBar managed slot='right' className='mr-1' ontap={handleGuestsPerCountryChange}>
              <ef-button name='2y' toggles>
                2Y
              </ef-button>
              <ef-button name='1y' active toggles>
                1Y
              </ef-button>
              <ef-button name='6m' toggles>
                6M
              </ef-button>
            </ButtonBar>
          </Header>
          <LineChart data={guestPerCountry} yAxisLabel={'Guests'} displayLegend />
        </div>
        <div className='grid grid-cols-2 col-span-2 row-span-1 gap-2 chart-container'>
          <div>
            <Header className='mb-3'>Visitor Type (YTD)</Header>
            <PieChart data={visitorTypeData} />
          </div>
          <div>
            <Header className='mb-3'>Room Types (YTD)</Header>
            <PieChart data={roomTypesData} />
          </div>
          <div>
            <Header className='mb-3'>Purpose of Visit (YTD)</Header>
            <PieChart data={visitPurposeData} />
          </div>
          <div>
            <Header className='mb-3'>Staying Length (YTD)</Header>
            <PieChart data={stayingLengthData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
