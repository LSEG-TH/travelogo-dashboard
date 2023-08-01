import './App.css';

import { useState } from 'react';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Header from './components/Header';
import SparkLineChart from './components/SparkLineChart';
import ButtonBar from './components/ButtonBar';
import '@refinitiv-ui/elements/button';

import {
  oneYearTurnupRatioData,
  oneYearSeasonalIncomeData,
  threeYearsSeasonalIncomeData,
  sixMonthsGuestPerCountryData,
  oneYearGuestPerCountryData,
  twoYearsGuestPerCountryData,
  twoYearsTurnupRatioData,
  sixMonthsTurnupRatioData,
} from './assets/mockupData';

import {
  roomTypesData,
  stayingLengthData,
  visitPurposeData,
  visitorTypeData,
} from './assets/mockupPieData';

function App() {
  const [turnupRatio, setTurnupRatio] = useState(oneYearTurnupRatioData);
  const [seasonalIncome, setSeasonalIncome] = useState(oneYearSeasonalIncomeData);
  const [guestPerCountry, setGuestPerCountry] = useState(oneYearGuestPerCountryData);

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
      // no default
    }
  };

  return (
    <div className='App'>
      <div className='grid grid-cols-5 grid-rows-2'>
        <div className='grid col-span-2 border-r border-b border-slate-200'>
          <>
            <Header>
              ($) Seasonal Income
              <ButtonBar
                managed
                slot='right'
                className='mr-1'
                ontap={handleSeasonalIncomeDataChange}
              >
                <ef-button name='3y' toggles>
                  3Y
                </ef-button>
                <ef-button name='1y' active toggles>
                  1Y
                </ef-button>
              </ButtonBar>
            </Header>
            <LineChart data={seasonalIncome} yAxisLabel={'Income ($)'} />
          </>
        </div>
        <div className='grid col-span-2 border-b border-slate-200'>
          <Header>
            Turn up ratio
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
        <div id='col3' className='flex flex-col col-span-1 row-span-2 border-l border-slate-200'>
          <Header className='flex-none'>Hotel Name - Powered By Akado v1.3.1</Header>
          <div className='flex flex-col grow items-center justify-center border-b border-slate-200'>
            <div>
              <h1>Average Rating</h1>
              <h1 className='text-5xl'>8.1/10</h1>
            </div>
          </div>
          <div className='flex flex-col grow items-center justify-center border-b border-slate-200'>
            <div>
              <h1>Average Monthly $</h1>
              <h1 className='text-5xl'>${getAverageMonthly()}</h1>
            </div>
            <SparkLineChart className='w-full h-44 pt-6' data={getOneYearIncome()}></SparkLineChart>
          </div>
          <div className='flex flex-col grow items-center justify-center border-b border-slate-200'>
            <div>
              <h1>ESG (By LSEG)</h1>
              <h1 className='text-5xl'>$15,000</h1>
            </div>
          </div>
        </div>
        <div className='grid col-span-2 border-r border-b border-slate-200'>
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
        <div className='grid grid-cols-2 col-span-2 row-span-2 gap-2 pl-4 border-b border-slate-200'>
          <div>
            <p className='m-4'>Visitor Type (YTD)</p>
            <PieChart data={visitorTypeData} />
          </div>
          <div>
            <p className='m-4'>Room Types (YTD)</p>
            <PieChart data={roomTypesData} />
          </div>
          <div>
            <p className='m-4'>Purpose of Visit (YTD)</p>
            <PieChart data={visitPurposeData} />
          </div>
          <div>
            <p className='m-4'>Staying Length (YTD)</p>
            <PieChart data={stayingLengthData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
