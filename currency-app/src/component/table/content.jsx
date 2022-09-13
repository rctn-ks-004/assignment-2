import React from "react";
import { Buy } from "../../method/buy";
import { Sell } from "../../method/sell";

export const Content = (props) => {
  return (
    <>
      {props.name.map((aku) => {
        const value = props.api.lis.rates?.[aku]
        return (
          <tr key={aku}>
            <td>{aku}</td>
            <td>{Buy(value)}</td>
            <td>{parseFloat(value).toFixed(2)}</td>
            <td>{Sell(value)}</td>
          </tr>
        );
      })}
    </>
  );
};
