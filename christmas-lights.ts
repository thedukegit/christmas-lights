export class ChristmasLightGrid {
    public grid = [0, 0]; // 0=off, 1=on

    public turnOn(index: number): void {
        this.grid[index] = 1;
    }

    public turnOff(index: number): void {
        this.grid[index] = 0;
    }

    public toggle(index: number): void {
        this.grid[index] = this.grid[index] === 0 ? 1 : 0;
    }
}