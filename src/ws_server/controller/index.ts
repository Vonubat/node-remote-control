import { mouse, up, down, left, right, straightTo, Button } from '@nut-tree/nut-js';
import { Commands } from '../../constants';
import { Controller } from '../types';

export const controller: Controller = {
  [Commands.mouseUp]: async ([offset]: number[]): Promise<void> => {
    await mouse.move(up(offset));
  },

  [Commands.mouseDown]: async ([offset]: number[]): Promise<void> => {
    await mouse.move(down(offset));
  },

  [Commands.mouseLeft]: async ([offset]: number[]): Promise<void> => {
    await mouse.move(left(offset));
  },

  [Commands.mouseRight]: async ([offset]: number[]): Promise<void> => {
    await mouse.move(right(offset));
  },

  [Commands.mousePosition]: async (): Promise<string> => {
    const { x, y } = await mouse.getPosition();
    const response: string = `${x},${y}`;
    return response;
  },

  [Commands.drawCircle]: async ([radius]: number[]): Promise<void> => {
    const TURN = 360;
    const { PI, cos, sin } = Math;
    const { x, y } = await mouse.getPosition();

    await mouse.pressButton(Button.LEFT);
    for (let deg = 0; deg <= TURN; deg++) {
      const rad = (PI / 180) * deg;
      const xPoint = x - radius + radius * cos(rad);
      const yPoint = y + radius * sin(rad);

      await mouse.move(straightTo({ x: xPoint, y: yPoint }));
    }
    await mouse.releaseButton(Button.LEFT);
  },

  [Commands.drawSquare]: async ([width]: number[]): Promise<void> => {
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(width));
    await mouse.move(left(width));
    await mouse.move(up(width));
    await mouse.releaseButton(Button.LEFT);
  },

  [Commands.drawRectangle]: async (/* TODO */) => {
    // TODO
  },

  [Commands.prntScrn]: async (/* TODO */) => {
    // TODO
  },
};
