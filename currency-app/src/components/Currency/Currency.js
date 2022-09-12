const Currency = ({ curr, excRate }) => {
    return (
        <tr>
            <td>{curr}</td>
            <td>weBuy</td>
            <td>{excRate}</td>
            <td>weSell</td>
        </tr>
    );
}

export default Currency;