import { CurrencyList } from './components/CurrencyList/CurrencyList';
import { CurrencyMsg } from './components/CurrencyMsg/CurrencyMsg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container table__container">
          <CurrencyList />
        </div>
        <div className="container message__container">
          <CurrencyMsg />
        </div>
      </div>
    </div>
  );
}

export default App;
