import './App.css';

import { useState } from 'react';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Header from './components/Header';
import SparkLineChart from './components/SparkLineChart';

import '@refinitiv-ui/elements/button';
import '@refinitiv-ui/elements/button-bar';

import {
  oneYearTurnupRatioData,
  oneYearSeasonalIncomeData,
  threeYearsSeasonalIncomeData,
  sixMonthsGuestPerCountryData,
  oneYearGuestPerCountryData,
  twoYearsGuestPerCountryData,
  pieData,
} from './assets/mockupData';
import ButtonBar from './components/ButtonBar';

function App() {
  const [seasonalIncomeData, setSeasonalIncomeData] = useState(oneYearSeasonalIncomeData);
  const [guestPerCountryData, setGuestPerCountryData] = useState(twoYearsGuestPerCountryData);

  function getOneYearIncome() {
    return oneYearSeasonalIncomeData.datasets[0].data;
  }

  function getAverageMonthly() {
    const sum = getOneYearIncome().reduce((a, b) => a + b);
    const average = sum / 12;
    return average.toLocaleString();
  }

  const handleChangeSeasonalIncome = (e) => {
    if (e.target.getAttribute('id') === '3y') {
      setSeasonalIncomeData(threeYearsSeasonalIncomeData);
    } else {
      setSeasonalIncomeData(oneYearSeasonalIncomeData);
    }
  };

  return (
    <div className='App'>
      <div className='grid grid-cols-5 grid-rows-2'>
        <div className='grid col-span-2 border-r border-b border-slate-200'>
          <>
            <Header>
              ($) Seasonal Income
              <ButtonBar managed slot='right' className='mr-1' ontap={handleChangeSeasonalIncome}>
                <ef-button id='3y' toggles>
                  3Y
                </ef-button>
                <ef-button id='1y' active toggles>
                  1Y
                </ef-button>
              </ButtonBar>
            </Header>
            <LineChart data={seasonalIncomeData} yAxisLabel={'Income ($)'} />
          </>
        </div>
        <div className='grid col-span-2 border-b border-slate-200'>
          <Header>
            Turn up ratio
            <ef-button-bar managed slot='right' className='mr-1'>
              <ef-button toggles>2Y</ef-button>
              <ef-button active toggles>
                1Y
              </ef-button>
              <ef-button toggles>6M</ef-button>
            </ef-button-bar>
          </Header>
          <BarChart data={oneYearTurnupRatioData} />
        </div>
        <div id='col3' className='flex flex-col col-span-1 row-span-2 border-l border-slate-200'>
          <Header className='flex-none'>Hotel Name - Powered By Akado v1.3.1</Header>
          <div className='flex flex-col grow items-center justify-center border-b border-slate-200'>
            <h1>Average Rating</h1>
            <h1 className='text-5xl'>8.1/10</h1>
          </div>
          <div className='flex flex-col grow items-center justify-center border-b border-slate-200'>
            <h1>Average Monthly $</h1>
            <h1 className='text-5xl'>${getAverageMonthly()}</h1>
            <SparkLineChart className='w-full h-44 pt-6' data={getOneYearIncome()}></SparkLineChart>
          </div>
          <div className='flex flex-col grow items-center justify-center border-b border-slate-200'>
            <h1>ESG (By LSEG)</h1>
            <h1 className='text-5xl'>$15,000</h1>
          </div>
        </div>
        <div className='grid col-span-2 border-r border-b border-slate-200'>
          <Header>
            Guests per country
            <ef-button-bar managed slot='right' className='mr-1'>
              <ef-button toggles>2Y</ef-button>
              <ef-button active toggles>
                1Y
              </ef-button>
              <ef-button toggles>6M</ef-button>
            </ef-button-bar>
          </Header>
          <LineChart data={guestPerCountryData} yAxisLabel={'Guests'} displayLegend />
        </div>
        <div className='grid grid-cols-2 col-span-2 row-span-2 gap-2 pl-4 border-b border-slate-200'>
          <PieChart data={pieData} />
          <PieChart data={pieData} />
          <PieChart data={pieData} />
          <PieChart data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default App;
