export enum WS_EVENT {
  START = 'start',
  CONNECTION = 'connection',
  MESSAGE = 'message',
  RESPONSE = 'response',
  CLOSE = 'close',
  ERROR = 'error'
}

export enum WS_COMMAND {
    MOUSE_UP = 'mouse_up',
    MOUSE_DOWN = 'mouse_down',
    MOUSE_LEFT = 'mouse_left',
    MOUSE_RIGHT = 'mouse_right',
    MOUSE_POSITION = 'mouse_position',
    DRAW_CIRCLE = 'draw_circle',
    DRAW_RECTANGLE = 'draw_rectangle',
    DRAW_SQUARE= 'draw_square',
    PRINT_SCREEN = 'prnt_scrn',
}

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
