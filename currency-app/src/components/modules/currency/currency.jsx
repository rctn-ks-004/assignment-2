import * as React from "react";
import { css } from "../../../styles/style.js";
import { useCurrencies } from "./currency.hook.js";
export default function Currency() {
  const title = [
    {
      label: "Currency",
    },
    {
      label: "We Buy",
    },
    {
      label: "Exchange Rate",
    },
    {
      label: "We Sell",
    },
  ];
  const rates = [
    {
      label: "CAD",
    },
    {
      label: "EUR",
    },
    {
      label: "IDR",
    },
    {
      label: "JPY",
    },
    {
      label: "CHF",
    },
    {
      label: "GBP",
    },
  ];
  const { currency, setCurrency } = useCurrencies();

  React.useEffect(() => {
    if (!currency) {
      fetch(
        "https://api.currencyfreaks.com/latest?apikey=8fe8e6f2225844db8677ad4e9cf31607"
      )
        .then((res) => {
          res.json().then((data) => {
            setCurrency(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currency, setCurrency]);

  return (
    <div className={styles.container()}>
      <div className={styles.rowFlex()}>
        {title.map((item) => {
          return (
            <div
              key={item.label}
              className={styles.textStyle()}
              style={{ fontWeight: "bold" }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      {currency &&
        rates.map((item) => {
          const buy = (currency.rates[item.label] * 105) / 100;
          const rateNow = currency.rates[item.label] * 1;
          const sell = (currency.rates[item.label] * 95) / 100;
          return (
            <div key={item.label} className={styles.rowFlex()}>
              <div className={styles.textStyle()}>{item.label}</div>
              <div className={styles.textStyle()}>{buy.toFixed(4)}</div>
              <div className={styles.textStyle()}>{rateNow.toFixed(4)} </div>
              <div className={styles.textStyle()}>{sell.toFixed(4)} </div>
            </div>
          );
        })}
      <div
        style={{ marginTop: 30, textAlign: "center", color: "white" }}
      >{`Rates are based from 1 USD`}</div>
      <div
        style={{ marginTop: 2, textAlign: "center", color: "white" }}
      >{`This application uses API from https://currencyfreaks.com `}</div>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    marginTop: "15%",
    marginRight: "30%",
    marginLeft: "30%",
  }),
  rowFlex: css({
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  }),
  textStyle: css({
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    paddingTop: 4,
    paddingBottom: 4,
    flex: 1,
    border: "1px solid black",
  }),
};
