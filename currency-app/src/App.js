import logo from './logo.svg';
import './App.css';
import React from 'react';

import Currency from './component/currency';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Project Currency Rate</h1>
				<Currency />
				<label>Rates are based from 1 USD.</label>
				<label>This application uses API from https://currencyfreaks.com</label>
			</header>
		</div>
	);
}

export default App;
