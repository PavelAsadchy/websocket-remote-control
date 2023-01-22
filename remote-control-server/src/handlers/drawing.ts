import {
  Button,
  down,
  left,
  mouse,
  Point,
  right,
  straightTo,
  up
} from '@nut-tree/nut-js';
import { FIGURE } from '../enums';

const drawRect = async (
  width: number,
  height: number
): Promise<void> => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.move(down(height));
  await mouse.move(left(width));
  await mouse.move(up(height));
  await mouse.releaseButton(Button.LEFT);
};

export const drawingHandler = async (
  figure: string,
  [width, height]: string[]
) => {
  switch (figure) {
    case FIGURE.CIRCLE:
      const { x, y } = await mouse.getPosition();
      let angle = 0;
      const startPoint = new Point(x + +width, y);
      await mouse.setPosition(startPoint);
      await mouse.pressButton(Button.LEFT);
      while (angle <= 360) {
        const radians = (angle * Math.PI) / 180;
        const pointX = x + Math.cos(radians) * +width;
        const pointY = y + Math.sin(radians) * +width;
        const target = new Point(pointX, pointY);
        await mouse.move(straightTo(target));
        angle++;
      }
      
      await mouse.releaseButton(Button.LEFT);
      break;
    
    case FIGURE.RECTANGLE:
      await drawRect(+width, +height);
      break;

    case FIGURE.SQUARE:
      await drawRect(+width, +width);
      break;
  }
};