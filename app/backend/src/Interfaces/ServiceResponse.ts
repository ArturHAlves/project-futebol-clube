export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'CONFLICT' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: ServiceMessage;
};

export type ServiceResponseSucess<T> = {
  status: 'SUCESSFUL';
  data: T;
};

export type ServiceResponse<T> = ServiceResponseSucess<T> | ServiceResponseError;
