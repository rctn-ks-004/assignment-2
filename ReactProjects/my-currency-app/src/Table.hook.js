import { useEffect, useState } from 'react';

const useTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://api.currencyfreaks.com/latest?apikey=7f22b2bf48d1463e95413c4f7da55ee9'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const currencyData = await response.json();
        setData(currencyData);
        console.log(currencyData)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const { rates } = data;

  const buyRate = currency => {
    const rate = Number(rates[currency]);
    return (rate + rate * 0.05).toFixed(2);
  };

  const sellRate = currency => {
    const rate = Number(rates[currency]);
    return (rate - rate * 0.05).toFixed(2);
  };

  const exchangeRate = currency => {
    const rate = Number(rates[currency]);
    return rate.toFixed(2);
  };

  return { loading, buyRate, sellRate, exchangeRate };
};

export default useTable;