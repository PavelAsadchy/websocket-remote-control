import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { NAV_DIRECTION } from '../enums';

export const navigationHandler = async (
  direction: string,
  [distance = '0']: string[]
) => {
  switch (direction) {
    case NAV_DIRECTION.UP:
      await mouse.move(up(+distance));
      break;

    case NAV_DIRECTION.DOWN:
      await mouse.move(down(+distance));
      break;

    case NAV_DIRECTION.LEFT:
      await mouse.move(left(+distance));
      break;

    case NAV_DIRECTION.RIGHT:
      await mouse.move(right(+distance));
      break;

    case NAV_DIRECTION.POSITION:
      const { x, y } = await mouse.getPosition();
      return {
        message: `mouse_position ${x} ${y}`
      };
  }
};