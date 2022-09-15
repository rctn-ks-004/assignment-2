import useTable from "./Table.hook";
import './Table.css'
import Header from './components/tablecurrency';
import Colom from './components/colom';

function Table() {
  const { loading } = useTable();

  return (
    <table>
      <Header />
      <Colom />
    </table>
  );
}

export default Table;