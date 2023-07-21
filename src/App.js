import "./App.css";
import Chart from "./components/chart";

function App() {
  return (
    <div className="App">
      <ef-layout flex container id="row1">
        <ef-layout><Chart/></ef-layout>
        <ef-layout><Chart/></ef-layout>
      </ef-layout>
       <ef-layout flex container id="row2">
        <ef-layout><Chart/></ef-layout>
        <ef-layout><Chart/></ef-layout>
      </ef-layout>
    </div>
  );
}

export default App;
