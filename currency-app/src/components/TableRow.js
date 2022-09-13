import { useApp } from "../hooks/App.hook";

function TableRow() {
  const data = useApp();

  return (
    <tbody>
      {Object.keys(data).map((key) => {
        return (
          <tr key={key}>
            <td>{key.toUpperCase()}</td>
            <td>{((data[key] * 105) / 100).toFixed(4)}</td>
            <td>{Number(data[key]).toFixed(6)}</td>
            <td>{((data[key] * 95) / 100).toFixed(4)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableRow;
