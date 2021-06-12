const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
];

export const getNeighbors = (grid: any[], c:number, r:number, numRows:number, numCols:number) => {
    let neighbors = 0
    
    operations.forEach(([x, y]) => {
        const newR = r + y
        const newC = c + x

        if (newR >= 0 && newR < numRows && newC >= 0 && newC < numCols) {
            neighbors += grid[newR][newC]
        }
    })
    
    return neighbors
}
