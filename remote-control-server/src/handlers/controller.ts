import { RawData } from 'ws';
import { CMD_TYPE } from '../enums';
import { drawingHandler } from './drawing';
import { navigationHandler } from './navigation';
import { screenHandler } from './screen';

export const controller = async (data: RawData) => {
  try {
    const [cmd, ...args] = String(data).split(' ');
    const [cmd_type, cmd_detail] = cmd.split('_');

    switch (cmd_type) {
      case CMD_TYPE.NAVIGATION:
        const res = await navigationHandler(cmd_detail, args);
        return res;
      case CMD_TYPE.DRAWING:
        await drawingHandler(cmd_detail, args);
        break;
      case CMD_TYPE.SCREEN:
        const prntScr = await screenHandler();
        return prntScr;
      default:
        return;
    }
  } catch {}
};