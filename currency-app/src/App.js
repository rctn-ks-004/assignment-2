import './App.css';
import { useApp } from './AppHook';

function App() {
  const {
        currency,
        weBuy,
        weSell
  } = useApp();

  return (
    <div className="App">
      <div className='main-container'>
      <table>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
        <tr>
          <td>CAD</td>
          <td>{weBuy(currency.CAD)}</td>
          <td>{currency.CAD}</td>
          <td>{weSell(currency.CAD)}</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>{weBuy(currency.EUR)}</td>
          <td>{currency.EUR}</td>
          <td>{weSell(currency.EUR)}</td>
        </tr>
        <tr>
          <td>IDR</td>
          <td>{weBuy(currency.IDR)}</td>
          <td>{currency.IDR}</td>
          <td>{weSell(currency.IDR)}</td>
        </tr>
        <tr>
          <td>JPY</td>
          <td>{weBuy(currency.JPY)}</td>
          <td>{currency.JPY}</td>
          <td>{weSell(currency.JPY)}</td>
        </tr>
        <tr>
          <td>CHF</td>
          <td>{weBuy(currency.CHF)}</td>
          <td>{currency.CHF}</td>
          <td>{weSell(currency.CHF)}</td>
        </tr>
        <tr>
          <td>GBP</td>
          <td>{weBuy(currency.GBP)}</td>
          <td>{currency.GBP}</td>
          <td>{weSell(currency.GBP)}</td>
        </tr>
        
      </table>
      </div>
      <p>Rates are based from 1 USD
      <br></br>
      This Application uses API from https://currencyfreaks.com</p>
      
    </div>
    

  );
}

export default App;
