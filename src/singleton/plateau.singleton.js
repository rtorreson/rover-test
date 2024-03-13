/**
 * Represents a plateau on Mars.
 */
export class Plateau {
    /**
     * Create a Plateau instance.
     * @param {number} x - The width of the plateau.
     * @param {number} y - The height of the plateau.
     */
    constructor(x, y) {
        /**
         * The width of the plateau.
         * @type {number}
         */
        this.x = x;
        /**
         * The height of the plateau.
         * @type {number}
         */
        this.y = y;
    }

    /**
     * Check if a position is within the bounds of the plateau.
     * @param {number} x - The x-coordinate to check.
     * @param {number} y - The y-coordinate to check.
     * @returns {boolean} True if the position is within bounds, false otherwise.
     */
    withinBounds(x, y) {
        return x >= 0 && x <= this.x && y >= 0 && y <= this.y;
    }
}
