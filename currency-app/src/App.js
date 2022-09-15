import './App.css';
import axios from "axios"
import { useEffect, useState } from "react"
import API from './api-key';
import { Buy } from './logic/Buy';
import { Sell } from './logic/Sell';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetch = async () => {
      const respon = await axios.get(API)
      setData(respon.data.rates)
    }
    fetch()
  }, [])

 
 const Exchange = (val) => parseFloat(val.replace()).toFixed(6).toString();

  return (
    <div className="App">
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
              <td>{Buy(data[item])}</td>
              <td>{Exchange(data[item])}</td>
              <td>{Sell(data[item])}</td>
            </tr>
          })}
        </tbody>
      </table>

       <footer>
          Rates are based from 1 USD. <br />
          This application uses API from https://currencyfreaks.com
        </footer>
    </div>
  );
}

export default App;