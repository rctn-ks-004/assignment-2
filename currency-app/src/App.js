import "./App.css";
import Table from "./components/Table";
import { useApp } from "./hooks/App.hook";

function App() {
  const { data, loading, error } = useApp();

  return (
    <div className="App">
      {loading && <div style={{fontSize: "20px"}}>A moment please...</div>}
      {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
      <Table data={data} />
      <br />
      <p>
        Rates are based from 1 USD.
        <br />
        This application uses API from https://currencyfreaks.com
      </p>
    </div>
  );
}

export default App;
