export const generateGrid = (grid: any[], numCols:number, numRows:number) => {
    if(grid.length > numRows) {
        while(grid.length > numRows) {
            grid.pop()
        }
    }

    if(grid.length < numRows) {
        while(grid.length < numRows) {
            grid.push(Array(numCols).fill(0))
        }
    }

    for(let i in grid) {
        if(grid[i].length > numCols) {
            while(grid[i].length > numCols) {
                grid[i].pop()
            }
        }

        if(grid[i].length < numCols) {
            while(grid[i].length < numCols) {
                grid[i].push(0)
            }
        }
    }

    return grid
}