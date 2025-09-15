export interface Coordinates {
    x: number;
    y: number;
}

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

    public turnOn(start: Coordinates, end: Coordinates): void {
        for (let i = start.y; i <= end.y; i++) {
            for (let j = start.x; j <= end.x; j++) {
                this.grid[i][j] = 1;
            }
        }
        console.log('turned on: ', this.grid);
    }
}