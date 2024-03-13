import { strictEqual, throws } from 'node:assert';
import { Rover } from '../src/command/rover.command.js';

describe('Rover', () => {
  describe('#move()', () => {
    it("should correctly update the rover's position", () => {
      const rover = new Rover(1, 2, 'N');
      rover.move(['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
      strictEqual(rover.getPosition(), '1 3 N');
    });

    it('should throw an error for invalid instructions', () => {
      const rover = new Rover(1, 2, 'N');
      throws(() => rover.move(['X']), Error);
    });
  });
});
