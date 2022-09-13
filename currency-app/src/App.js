import './App.css';
import axios from "axios"
import { useEffect, useState } from "react"
import API from './api';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(API)
      setData(response.data.rates)
    }
    fetch()
  }, [])

  const fixed = (value) => parseFloat(value.replace(/,/g, '')).toFixed(4).toString();

  const Sell = (value, rate) => {
    const data = parseInt(value) - (rate / 100) * value
    return data.toFixed(4).toString()
  };
  const Buy = (value, rate) => {
    const data = parseInt(value) + (rate / 100) * value
    return data.toFixed(4).toString()
  };


  return (
    <div className="App">
      <h3>Exchange Rate With Base Currency 1 USD</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((item) => {
            return <tr key={item}>
              <td >{item}</td>
              <td>{Buy(data[item], 5)}</td>
              <td>{fixed(data[item])}</td>
              <td>{Sell(data[item], 5)}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
