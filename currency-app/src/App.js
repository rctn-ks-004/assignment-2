import logo from './logo.svg';
import './App.css';
import Currency from './Currency';
import CurrencyHook from './CurrencyHook';

function App() {
  const {data} = CurrencyHook();

  return (
    <div className="App">
      <table>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
        {data && data.map((item, id) => {
          return <Currency key={id} name={item.name} exchange={item.exchangeRate} />;
        })}
      </table>
    </div>
  );
}

export default App;
