import type { Literal } from '../../../utils/types';

export type ValidationResult<T extends Literal> = Readonly<{
  ok: boolean;
  errors: Partial<{
    [key in keyof T]: string;
  }>;
}>;

type SyncAPICallFN<Arg, Output> = null extends Arg
  ? () => Output
  : (arg: Arg) => Output;

export type APICallFN<Arg, Output> = null extends Arg
  ? () => Promise<Output>
  : (arg: Arg) => Promise<Output>;

export type SyncRequestWithValidationFN<T extends Literal> = SyncAPICallFN<T, ValidationResult<T>>;

export type RequestWithValidationFN<T extends Literal> = APICallFN<T, {
  ok: boolean;
  errors: Partial<{
    [key in keyof T]: string;
  }>;
}>;

export type ToSyncAPI<T> = T extends Literal
  ? {
    [key in keyof T]: ToSyncAPI<T[key]>
  }
  : T extends APICallFN<infer Arg, infer Output>
    ? SyncAPICallFN<Arg, Output>
    : never;

