import "./App.css";
import { useApp } from "./App.hook";

const App = () => {
  const { data } = useApp();

  return (
    <div>
      <table>
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
        <tr>
          <td>CAD</td>
          <td>
            {data.map((item) => {
              return <p>{Number((5 / 100) * item.CAD + Number(item.CAD)).toFixed(4)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.CAD).toFixed(6)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.CAD - (5 / 100) * item.CAD).toFixed(4)}</p>;
            })}
          </td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>
            {data.map((item) => {
              return <p>{Number((5 / 100) * item.EUR + Number(item.EUR)).toFixed(4)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.EUR).toFixed(6)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.EUR - (5 / 100) * item.EUR).toFixed(4)}</p>;
            })}
          </td>
        </tr>
        <tr>
          <td>IDR</td>
          <td>
            {data.map((item) => {
              return <p>{Number((5 / 100) * item.IDR + Number(item.IDR)).toFixed(4)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.IDR).toFixed(6)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.IDR - (5 / 100) * item.IDR).toFixed(4)}</p>;
            })}
          </td>
        </tr>
        <tr>
          <td>JPY</td>
          <td>
            {data.map((item) => {
              return <p>{Number((5 / 100) * item.JPY + Number(item.JPY)).toFixed(4)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.JPY).toFixed(6)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.JPY - (5 / 100) * item.JPY).toFixed(4)}</p>;
            })}
          </td>
        </tr>
        <tr>
          <td>CHF</td>
          <td>
            {data.map((item) => {
              return <p>{Number((5 / 100) * item.CHF + Number(item.CHF)).toFixed(4)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.CHF).toFixed(6)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.CHF - (5 / 100) * item.CHF).toFixed(4)}</p>;
            })}
          </td>
        </tr>
        <tr>
          <td>GBP</td>
          <td>
            {data.map((item) => {
              return <p>{Number((5 / 100) * item.GBP + Number(item.GBP)).toFixed(4)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.GBP).toFixed(6)}</p>;
            })}
          </td>
          <td>
            {data.map((item) => {
              return <p>{Number(item.GBP - (5 / 100) * item.GBP).toFixed(4)}</p>;
            })}
          </td>
        </tr>
      </table>
      <p>
        Rate are based from 1 USD.
        <br />
        This application uses API from https://currencyfreaks.com.
      </p>
    </div>
  );
};

export default App;
