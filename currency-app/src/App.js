import "./App.css";
import { useApp } from "./App.hook";

function App() {
  const data = useApp();

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => {
            return (
              <tr key={key}>
                <td>{key.toUpperCase()}</td>
                <td>{((data[key] * 105) / 100).toFixed(4)}</td>
                <td>{Number(data[key]).toFixed(6)}</td>
                <td>{((data[key] * 95) / 100).toFixed(4)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <p>
        Rates are based from 1 USD.
        <br />
        This application uses API from https://currencyfreaks.com
      </p>
    </div>
  );
}

export default App;