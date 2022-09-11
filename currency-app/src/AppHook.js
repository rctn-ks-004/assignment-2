import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApp = () => {
    const [currency, setCurrency] = useState('');

    const currencyCall = () => {
      axios({
        method:'get',
        url: 'https://api.currencyfreaks.com/latest?apikey=8eb2b63b03fc453d99f3e88703cef79e&symbols=CAD,IDR,JPY,CHF,EUR,GBP'
      }).then((response) => {
        if (response.status === 200){
          setCurrency(response.data.rates)
          console.log(response)
        }
      })
    }
  
    function weBuy(currency){
      const buyCurrency = currency * (105/100)
      return(
        buyCurrency
      )
    }
  
    function weSell(currency){
      const sellCurrency = currency * (95/100)
      return(
        sellCurrency
      )
    }
  
    useEffect(() => {
      currencyCall();
    }, [])

    return{
        currency,
        setCurrency,
        currencyCall,
        weBuy,
        weSell,
    };

}