import './App.css';
import BarChart from './components/barChart';
import LineChart from './components/lineChart';
import PieChart from './components/pieChart';

function App() {
  return (
    <div className='App'>
      <div id='row1' className='grid grid-cols-3 gap-1'>
        <div>
          <LineChart title='Seasonal Income' />
        </div>
        <div>
          <BarChart title='Turn Up Ratio' />
        </div>
      </div>
      <div id='row2' className='grid grid-cols-3 grid-rows-2 gap-1'>
        <div className='grid row-span-2'>
          <LineChart className='row-span-2 h-fit' title='Guests per Contries' />
        </div>
        <div className='grid grid-cols-2 row-span-2 gap-1'>
          <PieChart />
          <PieChart />
          <PieChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default App;
