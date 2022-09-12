import { useEffect, useState } from 'react';

const useFetch = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch(
			'https://api.currencyfreaks.com/latest?apikey=d3ecc101d4a540ae82bde9a3b0a2efda'
		)
			.then((res) => res.json())
			.then((res) => {
				setLoading(false);
				setData({
					eur: res.rates['EUR'],
					idr: res.rates['IDR'],
					jpy: res.rates['JPY'],
					chf: res.rates['CHF'],
					gbp: res.rates['GBP'],
				});
			});
	}, []);
	return [data, loading];
};

export default useFetch;
