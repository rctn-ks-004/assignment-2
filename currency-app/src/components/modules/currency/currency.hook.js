import * as React from "react";

export const useCurrencies = () => {
  const [currency, setCurrency] = React.useState();

  return { currency, setCurrency };
};
