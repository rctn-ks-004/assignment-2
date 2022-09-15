import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Currency() {
	const [data, setData] = useState([]);

	const API_KEY = 'c5fc5eca5d984cfba7ec32df6f9490bf';

	const fetchData = async () => {
		try {
			const respone = await axios.get(
				`https://api.currencyfreaks.com/latest?apikey=${API_KEY}`
			);
			console.log(respone.data.rates);
			const result = Object.keys(respone.data.rates)
				.filter((key) => {
					return (
						key === 'CAD' ||
						key === 'EUR' ||
						key === 'IDR' ||
						key === 'JPY' ||
						key === 'CHF' ||
						key === 'GBP'
					);
				})
				.map((item) => {
					return {
						name: item,
						rate: +respone.data.rates[item],
					};
				});
			setData(result);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	};

	const buy = (data) => {
		return data + (5 / 100) * data.toFixed(4);
	};

	const sell = (data) => {
		return data - (5 / 100) * data.toFixed(4);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<table className='table'>
				<tr>
					<th>Currency</th>
					<th>We Buy</th>
					<th>Exchange Rate</th>
					<th>We Sell</th>
				</tr>
				{data.map((value) => (
					<tr>
						<td>{value.name}</td>
						<td>{Number(buy(value.rate)).toFixed(4)}</td>
						<td>{Number(value.rate).toFixed(4)}</td>
						<td>{Number(sell(value.rate)).toFixed(4)}</td>
					</tr>

					// <tr>
					// 	<td>{value.name}</td>
					// 	<td>{buy(value.rate)}</td>
					// </tr>
				))}
			</table>
			{/* {liat} */}
		</>
	);
}

export default Currency;
