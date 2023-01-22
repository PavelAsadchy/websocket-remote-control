import { HandlerResponse, ProcessedResponse } from '../lib/models';

export const processResponse = (
  { message, data }: HandlerResponse
): ProcessedResponse => {
  return data
    ? {
        loggerMsg: `${message} ${data}`,
        clientResp: `${message} ${data}`
      }
    : {
        loggerMsg: message,
        clientResp: formatSendData(message)
    };
};

export const formatSendData = (
  data: string
): string => data.split(' ').join('_');