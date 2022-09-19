import React from 'react'

function Currency(props) {
    const exchangeRate = nilai((+props.exchange).toFixed(4));
    const weBuyRate = nilai(+exchangeRate + (exchangeRate * (5/100))).toFixed(4);
    const weSellRate = nilai(+exchangeRate - (exchangeRate * (5/100))).toFixed(4);

    return (
        <tr>
            <td>{props.name}</td>
            <td>{weBuyRate}</td>
            <td>{exchangeRate}</td>
            <td>{weSellRate}</td>
        </tr>
    )
}

export default Currency;