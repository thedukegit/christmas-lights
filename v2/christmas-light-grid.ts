export class ChristmasLightGrid {
    public grid: number[][] = [];

    public constructor(width: number = 2, height: number = 2) {
        for (let i = 0; i < height; i++) {
            this.grid[i] = [];
            for (let j = 0; j < width; j++) {
                this.grid[i][j] = 0;
            }
        }
        console.log('initialized: ', this.grid);
    }

    public turnOn(): void {
        this.grid.forEach((row, x) => {
            console.log('row: ', row);
            row.forEach((cell, y) => {
                this.grid[x][y] = 1;
            })
        })
        console.log('turned on: ', this.grid);
    }
}