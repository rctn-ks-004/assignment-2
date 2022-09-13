import React from "react";
import { Content } from "./content";
import { HeadTable } from "./header";
import { Load } from "./loading/loading";
import { useApi } from "../../method/useApi";

export const Table = () => {
  const nama = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"];

  const api = useApi(
    "https://api.currencyfreaks.com/latest?apikey=6e627ab4d1b0450ab4305388b81b2bd2"
  );
  return (
    <>
      {api.lis.length === 0 ? (
        <Load />
      ) : (
        <table>
          <HeadTable />
          <Content name={nama} api={api} />
        </table>
      )}
    </>
  );
};
