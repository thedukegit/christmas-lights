import {ChristmasLightGrid} from "./christmas-lights";

function isTurnedOff(christmasLightGrid: ChristmasLightGrid) {
    expect(christmasLightGrid.grid[0][0]).toBe(0);
    expect(christmasLightGrid.grid[0][1]).toBe(0);
    expect(christmasLightGrid.grid[1][0]).toBe(0);
    expect(christmasLightGrid.grid[1][1]).toBe(0);
}

function isTurnedOn(christmasLightGrid: ChristmasLightGrid) {
    expect(christmasLightGrid.grid[0][0]).toBe(1);
    expect(christmasLightGrid.grid[0][1]).toBe(1);
    expect(christmasLightGrid.grid[1][0]).toBe(1);
    expect(christmasLightGrid.grid[1][1]).toBe(1);
}

describe('christmas-lights', () => {
    let christmasLightGrid: ChristmasLightGrid;


    describe('grid of lights', () => {
        beforeEach(() => {
            christmasLightGrid = new ChristmasLightGrid(2, 2);
        });
        it('should have a grid of lights that are off by default', () => {
            isTurnedOff(christmasLightGrid);
        })
        it('should turn on and off a grid of lights', () => {
            // turn on
            christmasLightGrid.turnOn(0, 0);
            christmasLightGrid.turnOn(0, 1);
            christmasLightGrid.turnOn(1, 0);
            christmasLightGrid.turnOn(1, 1);

            // then check if they are on
            isTurnedOn(christmasLightGrid);

            // turn off
            christmasLightGrid.turnOff(0, 0);
            christmasLightGrid.turnOff(0, 1);
            christmasLightGrid.turnOff(1, 0);
            christmasLightGrid.turnOff(1, 1);

            // then check if they are off
            isTurnedOff(christmasLightGrid);
        })

        it('should toggle a grid of lights', () => {
            // toggle
            christmasLightGrid.toggle(0, 0);
            christmasLightGrid.toggle(0, 1);
            christmasLightGrid.toggle(1, 0);
            christmasLightGrid.toggle(1, 1);

            // then check if they are toggled
            isTurnedOn(christmasLightGrid);

            // toggle again
            christmasLightGrid.toggle(0, 0);
            christmasLightGrid.toggle(0, 1);
            christmasLightGrid.toggle(1, 0);
            christmasLightGrid.toggle(1, 1);


            // then check if they are toggled
            isTurnedOff(christmasLightGrid);
        });
    })

    describe('coordinates', () => {
        beforeEach(() => {
            christmasLightGrid = new ChristmasLightGrid(4, 4);
        })
        it('should turn on and off a section of the grid by a coordinate range', () => {
            // turn on
            christmasLightGrid.turnOnByCoordinates({x: 1, y: 1}, {x: 2, y: 2});
            // first row
            expect(christmasLightGrid.grid[0][0]).toBe(0);
            expect(christmasLightGrid.grid[0][1]).toBe(0);
            expect(christmasLightGrid.grid[0][2]).toBe(0);
            expect(christmasLightGrid.grid[0][3]).toBe(0);

            // second row
            expect(christmasLightGrid.grid[1][0]).toBe(0);
            expect(christmasLightGrid.grid[1][1]).toBe(1);
            expect(christmasLightGrid.grid[1][2]).toBe(1);
            expect(christmasLightGrid.grid[1][3]).toBe(0);

            // third row
            expect(christmasLightGrid.grid[2][0]).toBe(0);
            expect(christmasLightGrid.grid[2][1]).toBe(1);
            expect(christmasLightGrid.grid[2][2]).toBe(1);
            expect(christmasLightGrid.grid[2][3]).toBe(0);

            // fourth row
            expect(christmasLightGrid.grid[3][0]).toBe(0);
            expect(christmasLightGrid.grid[3][1]).toBe(0);
            expect(christmasLightGrid.grid[3][2]).toBe(0);
            expect(christmasLightGrid.grid[3][3]).toBe(0);

            // turn off
            christmasLightGrid.turnOffByCoordinates({x: 1, y: 1}, {x: 2, y: 2});
            // first row
            expect(christmasLightGrid.grid[0][0]).toBe(0);
            expect(christmasLightGrid.grid[0][1]).toBe(0);
            expect(christmasLightGrid.grid[0][2]).toBe(0);
            expect(christmasLightGrid.grid[0][3]).toBe(0);

            // second row
            expect(christmasLightGrid.grid[1][0]).toBe(0);
            expect(christmasLightGrid.grid[1][1]).toBe(0);
            expect(christmasLightGrid.grid[1][2]).toBe(0);
            expect(christmasLightGrid.grid[1][3]).toBe(0);

            // third row
            expect(christmasLightGrid.grid[2][0]).toBe(0);
            expect(christmasLightGrid.grid[2][1]).toBe(0);
            expect(christmasLightGrid.grid[2][2]).toBe(0);
            expect(christmasLightGrid.grid[2][3]).toBe(0);

            // fourth row
            expect(christmasLightGrid.grid[3][0]).toBe(0);
            expect(christmasLightGrid.grid[3][1]).toBe(0);
            expect(christmasLightGrid.grid[3][2]).toBe(0);
            expect(christmasLightGrid.grid[3][3]).toBe(0);

        })
    })
});