import {ChristmasLightGrid} from "./christmas-lights";

describe('christmas-lights', () => {
    let christmasLightGrid: ChristmasLightGrid;
    beforeEach(() => {
        christmasLightGrid = new ChristmasLightGrid();
    })
    describe('one light', () => {
        it('should turn off a single christmas light', () => {
            christmasLightGrid.turnOff();
            expect(christmasLightGrid.status).toBe(false);
        })

        it('should toggle a single christmas light', () => {
            christmasLightGrid.toggle();
            expect(christmasLightGrid.status).toBe(true);
            christmasLightGrid.toggle();
            expect(christmasLightGrid.status).toBe(false);
        })
    })

    describe('array of lights', () => {
        it('should turn on an array of two lights', () => {
            // first check if they are off
            expect(christmasLightGrid.grid[0]).toBe(0);
            expect(christmasLightGrid.grid[1]).toBe(0);

            // then turn on
            christmasLightGrid.turnOn(0);
            christmasLightGrid.turnOn(1);

            // then check if they are on
            expect(christmasLightGrid.grid[0]).toBe(1);
            expect(christmasLightGrid.grid[1]).toBe(1);
        });
    });
});