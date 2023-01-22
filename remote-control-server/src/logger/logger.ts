import { STATUS } from '../enums';

export const logger = (
  status: STATUS,
  data?: String
): void => {
  switch (status) {
    case STATUS.START:
      console.log(`WebSocket server started on port ${data}`);
      break;

    case STATUS.CONNECTION:
      console.log(`New WebSocket Client connected`);
      break;

    case STATUS.DATA:
      console.log(`Command from client: ${data}`);
      break;
  
    case STATUS.RESPONSE:
      data && console.log(`Response from server: ${data}`);
      break;

    case STATUS.CLOSE:
      console.log(`Connection closed`);
      break;

    case STATUS.ERROR:
      console.log(`Oops, smth went wrong...`);
      break;

    case STATUS.EXIT:
      console.log(`Server terminated`);
      break;
  }
};