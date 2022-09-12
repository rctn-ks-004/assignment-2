import './App.css';
import useFetch from './utils/hooks/use-fetch';

import TableHead from './components/TableHead';
import TableBody from './components/TableBody';

function App() {
	const [data, loading] = useFetch();
	return (
		<div className="App">
			<div className="container">
				<table cellPadding="10">
					{loading && <p> loading..</p>}
					<TableHead />
					<TableBody datas={data} />
				</table>
				<p>
					Rates are based from 1 USD. <br /> This application uses API from
					https://currencyfreaks.com
				</p>
			</div>
		</div>
	);
}

export default App;
