import { Chart } from "./components/Chart";
import "./App.css";
import HeaderTop from "./components/headerTop";
import HeaderBottom from "./components/headerBottom";
// import Home from './components/Home'

function App() {
  return (
    <div className="app">
      <HeaderTop></HeaderTop>
      <div className="header">
        <div className="container">
          <HeaderBottom></HeaderBottom>
        </div>
      </div>
      <div className="container">
        <Chart></Chart>
      </div>
    </div>
  );
}

export default App;
