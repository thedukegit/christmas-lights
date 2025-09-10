export class ChristmasLight {
    public status: boolean = false; //chrismas light is off by default
    public turnOn(): void {
        this.status = true;
    }
    public turnOff(): void {
        this.status = false;
    }

    public toggle(): void {
        this.status = !this.status;
    }
}