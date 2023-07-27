import './App.css';
import BarChart from './components/barChart';
import LineChart from './components/lineChart';
import PieChart from './components/pieChart';

function App() {
  return (
    <div className='App'>
      <div className='grid grid-cols-5 grid-rows-2 gap-1'>
        <div className='grid col-span-2 gap-1'>
          <LineChart className='' value='' onChange={() => {}} title='Seasonal Income' />
        </div>
        <div className='grid col-span-2 gap-1'>
          <BarChart value='' onChange={() => undefined} title='Turn Up Ratio' />
        </div>
        <div id='col3' className='grid col-span-1 row-span-3 gap-1'>
          <div className='grid items-center justify-center'>
            <div>
              <h1>Hotel Name</h1>
              <span>Powered By Akado v1.3.1</span>
            </div>
          </div>
          <div className='grid items-center justify-center'>
            <div>
              <h1>Avg Rating</h1>
              <h1>8.1</h1>
            </div>
          </div>
          <div className='grid items-center justify-center'>
            <div>
              <h1>Avg Monthly$</h1>
              <h1>$15,000</h1>
            </div>
          </div>
          <div className='grid items-center justify-center'>
            <div>
              <h1>ESG (By LSEG)</h1>
              <h1>$15,000</h1>
            </div>
          </div>
        </div>
        <div className='grid col-span-2 gap-1'>
          <LineChart value='' onChange={() => undefined} title='Guests per Contries' />
        </div>
        <div className='grid grid-cols-2 col-span-2 row-span-2 gap-1'>
          <PieChart value='' title='' onChange={() => undefined} />
          <PieChart value='' title='' onChange={() => undefined} />
          <PieChart value='' title='' onChange={() => undefined} />
          <PieChart value='' title='' onChange={() => undefined} />
        </div>
      </div>
    </div>
  );
}

export default App;
