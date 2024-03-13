import { strictEqual } from 'node:assert';
import { RoverNavigator } from '../src/strategy/navigate.strategy.js';

describe('Rover Navigation', () => {
  it('should navigate rovers correctly', () => {
    const plateau = '5 5';
    const roverInstructions = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];

    const expectedOutput = `1 3 N\n5 1 E`;

    const navigateRovers = new RoverNavigator(plateau, roverInstructions).navigateRovers();

    strictEqual(navigateRovers, expectedOutput);
  });
});
