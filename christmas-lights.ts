export class ChristmasLightGrid {
    public status: boolean = false; //chrismas light is off by default
    public grid = [0, 0]; // 0=off, 1=on

    public turnOn(index: number): void {
        this.grid[index] = 1;
    }

    public turnOff(): void {
        this.status = false;
    }

    public toggle(): void {
        this.status = !this.status;
    }
}