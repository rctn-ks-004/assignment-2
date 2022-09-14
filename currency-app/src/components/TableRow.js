function TableRow(props) {
  return (
    <tbody>
      {props.data && Object.keys(props.data).map((key) => {
        return (
          <tr key={key}>
            <td>{key.toUpperCase()}</td>
            <td>{((props.data[key] * 105) / 100).toFixed(4)}</td>
            <td>{Number(props.data[key]).toFixed(6)}</td>
            <td>{((props.data[key] * 95) / 100).toFixed(4)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableRow;
