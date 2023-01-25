import { mouse, up, down, left, right } from '@nut-tree/nut-js';
import { Commands } from '../../constants';
import { Controller } from '../types';

export const controller: Controller = {
  [Commands.mouseUp]: async ([offset]: number[]): Promise<void> => {
    mouse.move(up(offset));
  },

  [Commands.mouseDown]: async ([offset]: number[]): Promise<void> => {
    mouse.move(down(offset));
  },

  [Commands.mouseLeft]: async ([offset]: number[]): Promise<void> => {
    mouse.move(left(offset));
  },

  [Commands.mouseRight]: async ([offset]: number[]): Promise<void> => {
    mouse.move(right(offset));
  },

  [Commands.mousePosition]: async (/* TODO */): Promise<string> => {
    const { x, y } = await mouse.getPosition();
    const response: string = `${x},${y}`;
    return response;
  },

  [Commands.drawCircle]: async (/* TODO */) => {
    // TODO
  },

  [Commands.drawSquare]: async (/* TODO */) => {
    // TODO
  },

  [Commands.drawRectangle]: async (/* TODO */) => {
    // TODO
  },

  [Commands.prntScrn]: async (/* TODO */) => {
    // TODO
  },
};
