import { mouse, up, down, left, right, MouseClass } from '@nut-tree/nut-js';
import { Commands } from '../../constants';

type CommandHandler = (args: number[]) => Promise<void | string | MouseClass>;
type Controller = Record<Commands, CommandHandler>;

export const controller: Controller = {
  [Commands.mouseUp]: async ([offset]: number[]) => {
    return mouse.move(up(offset));
  },

  [Commands.mouseDown]: async ([offset]: number[]) => {
    return mouse.move(down(offset));
  },

  [Commands.mouseLeft]: async ([offset]: number[]) => {
    return mouse.move(left(offset));
  },

  [Commands.mouseRight]: async ([offset]: number[]) => {
    return mouse.move(right(offset));
  },

  [Commands.mousePosition]: async (/* TODO */) => {
    // TODO
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
