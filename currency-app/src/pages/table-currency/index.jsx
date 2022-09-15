import { useGetCurrency } from "../../api-hooks/use-get-currency";
import * as React from "react";

export default function TableCurrency() {
  const { loading, currency } = useGetCurrency();
  const listCurrencies = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"];
  if (loading) {
    return <p>pending</p>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {listCurrencies.map((label, index) => {
            const price = parseFloat(currency[label]);
            return (
              <tr key={`${label}-${index}`}>
                <td>{label}</td>
                <td>{(price * 1.05).toFixed(2)}</td>
                <td>{parseFloat(price).toFixed(2)}</td>
                <td>{(price * 0.95).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Rates are based from 1 USD</p>
      <p>This application uses API from https://currencyfreaks.com/</p>
    </>
  );
}
