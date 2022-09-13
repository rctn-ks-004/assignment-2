import { useState, useEffect } from "react";

export const useApp = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=c1da0777fe9b4876ba85f585e5201b4f"
    )
      .then((res) => res.json())
      .then((data) =>
        setData({
          cad: data.rates["CAD"],
          eur: data.rates["EUR"],
          idr: data.rates["IDR"],
          jpy: data.rates["JPY"],
          chf: data.rates["CHF"],
          gbp: data.rates["GBP"],
        })
      );
  });

  return data;
};
