import WebSocket, { WebSocketServer } from 'ws';
import 'dotenv/config';

import { WS_EVENT } from './enums';

const port = Number(process.env.PORT);

const wss = new WebSocketServer({ port });

wss.on(WS_EVENT.CONNECTION, (ws: WebSocket) => {
  console.log('connected')
  ws.on(WS_EVENT.MESSAGE, (data) => {
    console.log('received: %s', data);
  });

  ws.send('something');
});