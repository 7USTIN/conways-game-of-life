const operations = [
	[0, 1],
	[0, -1],
	[1, -1],
	[-1, 1],
	[1, 1],
	[-1, -1],
	[1, 0],
	[-1, 0],
];

export const getNeighbors = (
	grid: any[],
	c: number,
	r: number,
	numRows: number,
	numCols: number,
) => {
	let neighbors = 0;

	operations.forEach(([x, y]) => {
		let newR = r + y;
		let newC = c + x;

		if (newR < 0) newR = numRows - 1;
		if (newR >= numRows) newR = 0;
		if (newC < 0) newC = numCols - 1;
		if (newC >= numCols) newC = 0;

		neighbors += grid[newR][newC];
	});

	return neighbors;
};
