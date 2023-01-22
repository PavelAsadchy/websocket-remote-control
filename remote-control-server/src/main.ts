import WebSocket, {
  WebSocketServer,
  createWebSocketStream,
  RawData
} from 'ws';
import 'dotenv/config';
import { controller } from './handlers/controller';
import { logger } from './logger/logger';
import { STATUS } from './enums';
import { ControllerResponse, ProcessedResponse } from './lib/models';
import { formatSendData, processResponse } from './lib/helpers';

const port = Number(process.env.PORT);

const wss = new WebSocketServer({ port });
logger(STATUS.START, String(port));

wss.on('connection', (ws: WebSocket) => {
  logger(STATUS.CONNECTION);
  const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

  duplex.on('data', async (data: RawData) => {
    logger(STATUS.DATA, String(data));
    const res: ControllerResponse = await controller(data);

    if (res) {
      const { loggerMsg, clientResp }: ProcessedResponse = processResponse(res);
      logger(STATUS.RESPONSE, loggerMsg);
      ws.send(clientResp);
    } else {
      const processedMsg = formatSendData(String(data));
      ws.send(processedMsg);
    }
  });

  ws.on('close', () => {
    logger(STATUS.CLOSE);
  });
});

process.on("SIGINT", () => {
  logger(STATUS.EXIT);
  wss.close();
  process.exit(0);
});
