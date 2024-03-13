/**
 * Represents a Rover object.
 */
export class Rover {
    /**
     * Create a Rover.
     * @param {number} x - The initial x-coordinate.
     * @param {number} y - The initial y-coordinate.
     * @param {string} direction - The initial direction ('N', 'E', 'S', or 'W').
     */
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.directionChanges = {
            'N': { 'L': 'W', 'R': 'E' },
            'E': { 'L': 'N', 'R': 'S' },
            'S': { 'L': 'E', 'R': 'W' },
            'W': { 'L': 'S', 'R': 'N' }
        };
        this.directionMovements = {
            'N': { x: 0, y: 1 },
            'E': { x: 1, y: 0 },
            'S': { x: 0, y: -1 },
            'W': { x: -1, y: 0 }
        };
    }

    /**
     * Move the Rover according to the given instructions.
     * @param {string} instructions - The instructions ('L', 'R', or 'M').
     * @throws {Error} Will throw an error if the instruction is invalid.
     */
    move(instructions) {
        for (const instruction of instructions) {
            if (instruction === 'L' || instruction === 'R') {
                this.turn(instruction);
            } else if (instruction === 'M') {
                this.moveForward();
            } else {
                throw new Error('Invalid instruction');
            }
        }
    }

    /**
     * Turn the Rover left or right.
     * @param {string} instruction - The instruction ('L' or 'R').
     */
    turn(instruction) {
        this.direction = this.directionChanges[this.direction][instruction];
    }

    /**
     * Move the Rover forward in its current direction.
     */
    moveForward() {
        const { x: dx, y: dy } = this.directionMovements[this.direction];
        this.x += dx;
        this.y += dy;
    }

    /**
     * Get the current position and direction of the Rover.
     * @returns {string} The position and direction of the Rover.
     */
    getPosition() {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}