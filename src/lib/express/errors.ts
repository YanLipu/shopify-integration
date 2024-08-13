import { NextFunction, Request, Response } from 'express';
import { StatusCode } from './codes';
import { logger } from '../logger';

type ErrorHandler = () => (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => any;

export class ApplicationError extends Error {
  code: StatusCode;
  data: {
    name: string;
    message: string;
    code: StatusCode;
  };

  constructor(code: StatusCode, data?: any) {
    super();
    this.name = 'ApplicationError';
    this.message = data;
    this.code = code;
    this.data = {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}

export class ValidationError extends ApplicationError {
  constructor(data: any) {
    super(StatusCode.bad, data);
    this.name = 'ValidationError';
    this.data.name = this.name;
  }
}

const sendError = (res: Response, error: Error, code: StatusCode) =>
  res.status(code).send({
    name: error.name,
    details: error.message || undefined
  });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler: ErrorHandler = () => (err, _req, res, _next) => {
  logger.apiError(err);

  return sendError(res, err, StatusCode.unknown);
};
