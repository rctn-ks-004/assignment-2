import React from 'react';

const TableRow = ({ data }) => {
	return (
		<tr>
			<td>{data.label.toUpperCase()}</td>
			<td>{data.buy.toFixed(4)}</td>
			<td>{Number(data.rate).toFixed(4)}</td>
			<td>{data.sell.toFixed(4)}</td>
		</tr>
	);
};

export default TableRow;
