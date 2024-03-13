import { RoverFactory } from '../factory/rover.factory.js';

/**
 * Class responsible for navigating multiple rovers on a plateau.
 */
export class RoverNavigator {
  /**
   * Creates an instance of RoverNavigator.
   * @param {Plateau} plateau - The plateau object.
   * @param {Array<string>} roverData - An array of strings representing the position and instructions of the rovers.
   */
  constructor(plateau, roverData) {
    /**
     * The plateau object.
     * @type {Plateau}
     */
    this.plateau = plateau;

    /**
     * An array of strings representing the position and instructions of the rovers.
     * @type {Array<string>}
     */
    this.roverData = roverData;
  }

  /**
   * Navigate all rovers and return the final positions as a string.
   * @returns {string} A string containing the final positions of all rovers.
   */
  navigateRovers() {
    const rovers = [];

    for (let i = 0; i < this.roverData.length; i += 2) {
      const roverPosition = this.roverData[i];
      const instructions = this.roverData[i + 1];
      const rover = RoverFactory.createRover(roverPosition);
      rover.move(instructions);
      rovers.push(rover);
    }

    return rovers.map((rover) => rover.getPosition()).join('\n');
  }
}
