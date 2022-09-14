import TableHead from "./TableHead";
import TableRow from "./TableRow";

function Table(props) {
  return (
    <table>
      <TableHead />
      <TableRow data={props.data} />
    </table>
  );
}

export default Table;
