import { useState, useEffect } from "react";

export const useApp = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=c1da0777fe9b4876ba85f585e5201b4f"
    )
      // .then((res) => console.log(res))
      .then((res) => {
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData({
          cad: data.rates["CAD"],
          eur: data.rates["EUR"],
          idr: data.rates["IDR"],
          jpy: data.rates["JPY"],
          chf: data.rates["CHF"],
          gbp: data.rates["GBP"],
        });
        setError(null);
      })
      .catch((err) => {
        console.log(err.messages);
        setData({});
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
