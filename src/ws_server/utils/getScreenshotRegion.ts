import { Region } from '@nut-tree/nut-js';

export const getScreenshotRegion = (x: number, y: number): Region => {
  const SCREENSHOT_SIZE = 200;
  const left = x - SCREENSHOT_SIZE / 2 >= 0 ? x - SCREENSHOT_SIZE / 2 : 0;
  const top = y - SCREENSHOT_SIZE / 2 >= 0 ? y - SCREENSHOT_SIZE / 2 : 0;

  return new Region(left, top, SCREENSHOT_SIZE, SCREENSHOT_SIZE);
};
