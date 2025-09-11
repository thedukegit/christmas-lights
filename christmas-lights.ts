export class ChristmasLightGrid {
    public grid: Array<Array<number>> = []; //

    public constructor(width: number, height: number) {
        for (let i = 0; i < width; i++) {
            this.grid[i] = [];
            for (let j = 0; j < height; j++) {
                this.grid[i][j] = 0; // all lights are off initially
            }
        }
    }

    public turnOn(x: number, y: number): void {
        this.grid[x][y] = 1;
    }

    public turnOff(x: number, y: number): void {
        this.grid[x][y] = 0;
    }

    public toggle(x: number, y: number): void {
        this.grid[x][y] = this.grid[x][y] === 0 ? 1 : 0;
    }
}