import { Currency } from '../Currency/Currency';
import { useFetch } from './hooks/useFetch.hook';

export const CurrencyList = () => {
    const { data } = useFetch();
    console.log(data);

    return (
        <table className="currency__table">
            <thead className="currency__table-head">
                <tr>
                    <th>Currency</th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>


            </thead>
        </table>
    );
}