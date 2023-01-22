export enum CMD_TYPE {
  NAVIGATION = 'mouse',
  DRAWING = 'draw',
  SCREEN = 'prnt'
}

export enum NAV_DIRECTION {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  POSITION = 'position'
}

export enum FIGURE {
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
  SQUARE = 'square'
}

export enum STATUS {
  START = 'start',
  CONNECTION = 'connection',
  DATA = 'data',
  RESPONSE = 'response',
  CLOSE = 'close',
  ERROR = 'error',
  EXIT = 'exit'
}
