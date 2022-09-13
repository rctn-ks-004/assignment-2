import "./App.css";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table />
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
