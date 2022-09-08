import useTable from "./Table.hook";
import './Table.css'

function Table() {
  const { loading, buyRate, sellRate, exchangeRate } = useTable();

  return (
    !loading && (
      <div className="table">
          <div className="currency">
            <p className="title">Currency</p>
            <p>CAD</p>
            <p>EUR</p>
            <p>IDR</p>
            <p>JPY</p>
            <p>CHF</p>
            <p>GBP</p>
          </div>
          <div className="buy">
            <p className="title">We Buy</p>
            <p>{buyRate('CAD')}</p>
            <p>{buyRate('EUR')}</p>
            <p>{buyRate('IDR')}</p>
            <p>{buyRate('JPY')}</p>
            <p>{buyRate('CHF')}</p>
            <p>{buyRate('GBP')}</p>
          </div>
          <div className="exchange">
            <p className="title">Exchange Rate</p>
            <p>{exchangeRate('CAD')}</p>
            <p>{exchangeRate('EUR')}</p>
            <p>{exchangeRate('IDR')}</p>
            <p>{exchangeRate('JPY')}</p>
            <p>{exchangeRate('CHF')}</p>
            <p>{exchangeRate('GBP')}</p>
          </div>
          <div className="sell">
            <p className="title">We Sell</p>
            <p>{sellRate('CAD')}</p>
            <p>{sellRate('EUR')}</p>
            <p>{sellRate('IDR')}</p>
            <p>{sellRate('JPY')}</p>
            <p>{sellRate('CHF')}</p>
            <p>{sellRate('GBP')}</p>
          </div>
        </div>
    )
  );
}

export default Table;
