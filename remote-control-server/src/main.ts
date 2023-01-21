import WebSocket,
{
  WebSocketServer,
  createWebSocketStream,
  RawData
} from 'ws';
import 'dotenv/config';
import { controller } from './handlers/controller';

const port = Number(process.env.PORT);

const wss = new WebSocketServer({ port });

wss.on('connection', (ws: WebSocket) => {
  console.log('connected');
  const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

  duplex.on('data', async (data: RawData) => {
    console.log('received: %s', data);
    const res = await controller(data);
    // console.log(res);
    ws.send(res || data);
  });

  ws.on('close', () => {
    process.stdout.write('Close connection');
  });

  process.on("SIGINT", () => {
    console.log('Exit')
    ws.close();
    wss.close();
    process.exit(0);
  });
});