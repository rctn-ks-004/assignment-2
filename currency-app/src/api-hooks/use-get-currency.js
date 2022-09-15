import * as React from "react";

export function useGetCurrency() {
  const [currency, setCurrency] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if (!currency) {
      setLoading(true);
      fetch(
        "https://api.currencyfreaks.com/latest?apikey=b535cc24b2a04dc9b5f3203c823c6b25"
      )
        .then((result) => {
          result
            .json()
            .then((value) => {
              setCurrency(value.rates);
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch((error) => console.log(error));
    }
  }, [currency, loading]);
  return { currency, loading };
}
