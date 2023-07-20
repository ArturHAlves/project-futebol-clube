export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'CONFLICT' | 'NOT_FOUND' | 'INVALID_DATA' | 'UNAUTHORIZED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: ServiceMessage;
};

export type ServiceResponseSucess<T> = {
  status: 'SUCESSFUL';
  data: T;
};

export type ServiceResponse<T> = ServiceResponseSucess<T> | ServiceResponseError;
