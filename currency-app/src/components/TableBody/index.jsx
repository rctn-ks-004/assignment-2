import React from 'react';

import TableRow from '../TableRow';

const TableBody = ({ datas }) => {
	return (
		<tbody>
			{datas &&
				Object.entries(datas).map((data) => (
					<TableRow
						data={{
							label: data[0],
							buy: (data[1] * 105) / 100,
							rate: data[1],
							sell: (data[1] * 95) / 100,
						}}
					/>
				))}
		</tbody>
	);
};

export default TableBody;
