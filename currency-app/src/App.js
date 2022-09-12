import { CurrencyList } from './components/CurrencyList/CurrencyList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container table__container">
          <CurrencyList />
        </div>
      </div>
    </div>
  );
}

export default App;
