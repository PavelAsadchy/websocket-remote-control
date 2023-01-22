export interface HandlerResponse {
  message: string;
  data?: any;
}

export interface ProcessedResponse {
  loggerMsg: string;
  clientResp: string;
}

export type ControllerResponse = HandlerResponse | undefined;