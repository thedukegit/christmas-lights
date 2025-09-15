export class ChristmasLightGrid {
    public grid: number[][] = [];

    public constructor() {
        this.grid[0] = [0];
        this.grid[0][1] = 0;
        this.grid[1] = [0];
        this.grid[1][1] = 0;
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