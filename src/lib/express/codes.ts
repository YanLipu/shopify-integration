export enum StatusCode {
  ok = 200,
  created = 201,
  noBody = 204,
  bad = 400,
  forbidden = 403,
  notFound = 404,
  unprocessable = 422,
  unauthorized = 401,
  unknown = 500
}

export const isSuccess = (code: number) => code >= 200 && code < 300;
