import { Plateau } from './singleton/plateau.singleton.js';
import { RoverNavigator } from './strategy/navigate.strategy.js';

const plateau = new Plateau(5, 5);

const roverData = ['1 2 N', 'LMLMLMLMM', '3 3 E', 'MMRMMRMRRM'];

const navigateRovers = new RoverNavigator(plateau, roverData).navigateRovers();

console.log(navigateRovers);
