import {ChristmasLightGrid} from "../v2/christmas-light-grid";

describe('christmas-lights', () => {
    it('should turn on a grid of 2x2 lights', () => {
        // arrange
        // set up a new object of the ChristmasLights class with a grid
        const grid: ChristmasLightGrid = new ChristmasLightGrid();

        // act
        grid.turnOn()

        // assert
        expect(grid.grid[0][0]).toBe(1);
        expect(grid.grid[0][1]).toBe(1);
        expect(grid.grid[1][0]).toBe(1);
        expect(grid.grid[1][1]).toBe(1);
    });

    it('should initialize a grid of 3x3 lights', () => {
        // arrange
        // set up a new object of the ChristmasLights class with a grid
        const grid: ChristmasLightGrid = new ChristmasLightGrid(2, 3);


        // assert
        expect(grid.grid[0][0]).toBe(0);
        expect(grid.grid[0][1]).toBe(0);
        expect(grid.grid[1][0]).toBe(0);
        expect(grid.grid[1][1]).toBe(0);
        expect(grid.grid[2][0]).toBe(0);
        expect(grid.grid[2][1]).toBe(0);
    });
});