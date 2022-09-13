import { Currency } from '../Currency/Currency';
import { useFetch } from './hooks/useFetch.hook';

export const CurrencyList = () => {
    const { data } = useFetch('https://api.currencyfreaks.com/latest?apikey=1d9d795363e24a1a981d3047a54cc44f');

    const filteredData = data != null ? filterCurrency(data) : {};

    return (
        <table className="currency__table">
            <thead className="currency__table-head">
                <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>
                {
                    Object.keys(filteredData).map((curr, idx) => {
                        return <Currency curr={curr} excRate={parseFloat(filteredData[curr])} key={idx} idx={idx} />
                    })
                }
            </thead>
        </table>
    );
}

const filterCurrency = (data) => {
    const target = ['CAD', 'EUR', 'IDR', 'JPY', 'CHF', 'GBP'];
    const filteredCurr = {};
    target.forEach((curr) => {
        filteredCurr[curr] = data[curr];
    });
    return filteredCurr;
}