export class ChristmasLightGrid {
    public grid: number[][] = [];

    public constructor(width: number = 2, height: number = 2) {
        for (let i = 0; i < height; i++) {
            this.grid[i] = [];
            for (let j = 0; j < width; j++) {
                this.grid[i][j] = 0;
            }
        }
        console.log(this.grid);
    }

    public turnOn(): void {
        this.grid[0][0] = 1;
        this.grid[0][1] = 1;
        this.grid[1][0] = 1;
        this.grid[1][1] = 1;
        console.log(this.grid);
    }
}