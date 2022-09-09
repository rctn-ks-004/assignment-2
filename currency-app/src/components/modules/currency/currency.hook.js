import * as React from "react";

export const useCurrencies = () => {
  const [currency, setCurrency] = React.useState();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!currency) {
      setLoading(true);
      fetch(
        "https://api.currencyfreaks.com/latest?apikey=8fe8e6f2225844db8677ad4e9cf31607"
      )
        .then((res) => {
          res
            .json()
            .then((data) => {
              setCurrency(data);
            })
            .finally(() => setLoading(false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currency, setLoading]);

  return { currency, loading };
};
