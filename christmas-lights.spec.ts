import {ChristmasLightGrid} from "./christmas-lights";

describe('christmas-lights', () => {
    let christmasLightGrid: ChristmasLightGrid;
    beforeEach(() => {
        christmasLightGrid = new ChristmasLightGrid(2, 2);
    });

    describe('grid of lights', () => {
        it('should have a grid of lights that are off by default', () => {
            expect(christmasLightGrid.grid[0][0]).toBe(0);
            expect(christmasLightGrid.grid[0][1]).toBe(0);
            expect(christmasLightGrid.grid[1][0]).toBe(0);
            expect(christmasLightGrid.grid[1][1]).toBe(0);
        })
        it('should turn on and off a grid of lights', () => {
            // turn on
            christmasLightGrid.turnOn(0, 0);
            christmasLightGrid.turnOn(0, 1);
            christmasLightGrid.turnOn(1, 0);
            christmasLightGrid.turnOn(1, 1);

            // then check if they are on
            expect(christmasLightGrid.grid[0][0]).toBe(1);
            expect(christmasLightGrid.grid[0][1]).toBe(1);
            expect(christmasLightGrid.grid[1][0]).toBe(1);
            expect(christmasLightGrid.grid[1][1]).toBe(1);

            // turn off
            christmasLightGrid.turnOff(0, 0);
            christmasLightGrid.turnOff(0, 1);
            christmasLightGrid.turnOff(1, 0);
            christmasLightGrid.turnOff(1, 1);

            // then check if they are off
            expect(christmasLightGrid.grid[0][0]).toBe(0);
            expect(christmasLightGrid.grid[0][1]).toBe(0);
            expect(christmasLightGrid.grid[1][0]).toBe(0);
            expect(christmasLightGrid.grid[1][1]).toBe(0);
        })

        it('should toggle a grid of lights', () => {
            // toggle
            christmasLightGrid.toggle(0, 0);
            christmasLightGrid.toggle(0, 1);
            christmasLightGrid.toggle(1, 0);
            christmasLightGrid.toggle(1, 1);

            // then check if they are toggled
            expect(christmasLightGrid.grid[0][0]).toBe(1);
            expect(christmasLightGrid.grid[0][1]).toBe(1);
            expect(christmasLightGrid.grid[1][0]).toBe(1);
            expect(christmasLightGrid.grid[1][1]).toBe(1);

            // toggle again
            christmasLightGrid.toggle(0, 0);
            christmasLightGrid.toggle(0, 1);
            christmasLightGrid.toggle(1, 0);
            christmasLightGrid.toggle(1, 1);


            // then check if they are toggled
            expect(christmasLightGrid.grid[0][0]).toBe(0);
            expect(christmasLightGrid.grid[0][1]).toBe(0);
            expect(christmasLightGrid.grid[1][0]).toBe(0);
            expect(christmasLightGrid.grid[1][1]).toBe(0);
        });
    })
});