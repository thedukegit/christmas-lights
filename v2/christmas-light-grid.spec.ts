import {ChristmasLightGrid} from "../v2/christmas-light-grid";

describe('christmas-lights', () => {
    it('should turn on a grid of 2x2 lights', () => {
        // arrange
        // set up a new object of the ChristmasLights class with a grid
        const grid: ChristmasLightGrid = new ChristmasLightGrid();

        // act
        grid.turnOn({x: 0, y: 0}, {x: 1, y: 1});

        // assert
        expect(grid.grid[0][0]).toBe(1);
        expect(grid.grid[0][1]).toBe(1);
        expect(grid.grid[1][0]).toBe(1);
        expect(grid.grid[1][1]).toBe(1);
    });

    it('should initialize a grid of 2x3 lights', () => {
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

    it('should turn on a grid of 2x3 lights', () => {
        // arrange
        // set up a new object of the ChristmasLights class with a grid
        const grid: ChristmasLightGrid = new ChristmasLightGrid(2, 3);

        // act
        grid.turnOn({x: 0, y: 0}, {x: 1, y: 2});

        // assert
        expect(grid.grid[0][0]).toBe(1);
        expect(grid.grid[0][1]).toBe(1);
        expect(grid.grid[1][0]).toBe(1);
        expect(grid.grid[1][1]).toBe(1);
        expect(grid.grid[2][0]).toBe(1);
        expect(grid.grid[2][1]).toBe(1);
    })

    it('should turn on a portion of the grid', () => {
        // arrange
        // set up a new object of the ChristmasLights class with a grid
        const grid: ChristmasLightGrid = new ChristmasLightGrid(4, 4);

        // act
        grid.turnOn({x: 1, y: 1}, {x: 2, y: 2});

        // assert
        //it should look like this:
        // 0 0 0 0  <- 4th row (top)
        // 0 1 1 0  <- 3rd row
        // 0 1 1 0  <- 2nd row
        // 0 0 0 0  <- 1st row (bottom)

        // first row (bottom)
        expect(grid.grid[0][0]).toBe(0);
        expect(grid.grid[0][1]).toBe(0);
        expect(grid.grid[0][2]).toBe(0);
        expect(grid.grid[0][3]).toBe(0);

        expect(grid.grid[1][0]).toBe(0);
        expect(grid.grid[1][1]).toBe(1);
        expect(grid.grid[1][2]).toBe(1);
        expect(grid.grid[1][3]).toBe(0);

        expect(grid.grid[2][0]).toBe(0);
        expect(grid.grid[2][1]).toBe(1);
        expect(grid.grid[2][2]).toBe(1);
        expect(grid.grid[2][3]).toBe(0);

        expect(grid.grid[3][0]).toBe(0);
        expect(grid.grid[3][1]).toBe(0);
        expect(grid.grid[3][2]).toBe(0);
        expect(grid.grid[3][3]).toBe(0);
    })
});