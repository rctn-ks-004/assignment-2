import React, { useState, useEffect } from "react";
import axios from "axios";

export const useApp = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.currencyfreaks.com/latest?apikey=e351bd159f1745cb8b5d0f1aa15283dc&symbols=CAD,IDR,JPY,CHF,EUR,GBP");
      setData([res.data.rates]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
};
