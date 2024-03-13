import { strictEqual } from 'node:assert';
import { RoverNavigator } from '../src/strategy/navigate.strategy.js';

describe('Integration Test for navigateRovers function', () => {
  it('should produce correct output when integrated', () => {
    const plateau = { width: 5, height: 5 };
    const roverData = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];

    const actualOutput = new RoverNavigator(plateau, roverData).navigateRovers();

    const expectedOutput = '1 3 N\n5 1 E';

    strictEqual(
      actualOutput,
      expectedOutput,
      `Output mismatch. Expected: ${expectedOutput}. Actual: ${actualOutput}`
    );
  });
});
