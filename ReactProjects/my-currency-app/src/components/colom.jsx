import useTable from "../Table.hook";

function Colom(){
    const { loading, buyRate, sellRate, exchangeRate } = useTable();
    const currency = [
        'CAD', 
        'EUR',
        'IDR',
        'JPY',
        'CHF',
        'GBP'
    ]

    return (
        !loading && (
            <tbody>
                {currency.map((item) => {
                    return (
                        <tr>
                            <td>{item}</td>
                            <td>{buyRate(item)}</td>
                            <td>{sellRate(item)}</td>
                            <td>{exchangeRate(item)}</td>
                        </tr>
                    )
                })}
            </tbody>
        )
    )
    
}
export default Colom;