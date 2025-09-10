export class ChristmasLight {
    public status: boolean = false; //chrismas light is off by default
    public turnOn(): void {
        this.status = true;
    }
}