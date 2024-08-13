import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../lib/express/codes';

export type Action<T = Request> = (
  req: T,
  res: Response,
  next: NextFunction
) => any;

export class BaseController {
  sendCreated(res: Response, data?: any) {
    return res.status(StatusCode.created).json(data);
  }

  sendSuccess(res: Response, data?: any) {
    return res.status(StatusCode.ok).json(data);
  }

  sendVoid(res: Response) {
    return res.status(StatusCode.noBody).send();
  }
}
