import {ChristmasLightGrid} from "./christmas-lights";

describe('christmas-lights', () => {
    let christmasLightGrid: ChristmasLightGrid;
    beforeEach(() => {
        christmasLightGrid = new ChristmasLightGrid();
    });

    describe('array of lights', () => {
        it('should turn on and off array of two lights', () => {
            // first check if they are off
            expect(christmasLightGrid.grid[0]).toBe(0);
            expect(christmasLightGrid.grid[1]).toBe(0);

            // then turn on
            christmasLightGrid.turnOn(0);
            christmasLightGrid.turnOn(1);

            // then check if they are on
            expect(christmasLightGrid.grid[0]).toBe(1);
            expect(christmasLightGrid.grid[1]).toBe(1);

            // then turn off
            christmasLightGrid.turnOff(0);
            christmasLightGrid.turnOff(1);

            // then check if they are off
            expect(christmasLightGrid.grid[0]).toBe(0);
            expect(christmasLightGrid.grid[1]).toBe(0);
        });

        it('should toggle array of two lights', () => {
            // first check if they are off
            expect(christmasLightGrid.grid[0]).toBe(0);
            expect(christmasLightGrid.grid[1]).toBe(0);

            // then toggle
            christmasLightGrid.toggle(0);
            christmasLightGrid.toggle(1);

            // then check if they are on
            expect(christmasLightGrid.grid[0]).toBe(1);
            expect(christmasLightGrid.grid[1]).toBe(1);

            // then turn off
            christmasLightGrid.toggle(0);
            christmasLightGrid.toggle(1);

            // then check if they are off
            expect(christmasLightGrid.grid[0]).toBe(0);
            expect(christmasLightGrid.grid[1]).toBe(0);
        });
    });
});