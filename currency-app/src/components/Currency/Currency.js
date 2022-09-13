export const Currency = ({ curr, excRate, idx }) => {
    return (
        <tr key={`${curr}-${idx}`}>
            <td>{curr}</td>
            <td>{(excRate * 1.05).toFixed(5)}</td>
            <td>{excRate.toFixed(5)}</td>
            <td>{(excRate * 0.95).toFixed(5)}</td>
        </tr>
    );
}