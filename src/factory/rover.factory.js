import { Rover } from '../command/rover.command.js';

/**
 * A factory for creating Rover instances.
 */
export class RoverFactory {
    /**
     * Create a Rover from the given rover information.
     * @param {string} roverInfo - The rover information string ('x y direction').
     * @returns {Rover} A new Rover instance.
     */
    static createRover(roverInfo) {
        const [x, y, direction] = roverInfo.split(' ');
        return new Rover(parseInt(x), parseInt(y), direction);
    }
}