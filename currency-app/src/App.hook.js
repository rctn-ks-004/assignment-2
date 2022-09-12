import { useState, useEffect } from "react";

export const useApp = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.currencyfreaks.com/latest?apikey=c1da0777fe9b4876ba85f585e5201b4f')
      .then((res) => res.json())
      .then((res) => setData({
        cad: res.rates['CAD'],
        eur: res.rates['EUR'],
        idr: res.rates['IDR'],
        jpy: res.rates['JPY'],
        chf: res.rates['CHF'],
        gbp: res.rates['GBP'],
      }));
  }, []);

  return data;
};
