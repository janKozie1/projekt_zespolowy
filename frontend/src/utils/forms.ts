import { isNil } from 'lodash';
import type { ControllerFieldState, UseFormReturn } from 'react-hook-form';

import type { TextFieldProps } from '@mui/material/TextField';

import type { ValidationResult } from '../services/api/types';

import type { Literal } from './types';

export type SubmitHandler<UserInput extends Literal> = Readonly<{
  onSubmit: (input: UserInput) => Promise<ValidationResult<UserInput>>;
  onSuccess: (input: UserInput) => void;
}>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFormShape = any;

export const withErrorHandler = <UserInput extends Literal>(
  submitHandler: SubmitHandler<UserInput>, form: UseFormReturn<AnyFormShape>,
): SubmitHandler<UserInput>['onSubmit'] => async (...args) => {
    const validationResult = await submitHandler.onSubmit(...args);

    if (validationResult.ok) {
      submitHandler.onSuccess(...args);
    }

    Object.entries(validationResult.errors).forEach(([field, error]) => {
      if (!isNil(error)) {
        form.setError(field, { message: error });
      }
    });

    return Promise.resolve(validationResult);
  };

export const parseFieldState = (state: ControllerFieldState): Pick<TextFieldProps, 'error' | 'helperText'> => ({
  error: !isNil(state.error),
  helperText: state.error?.message,
});

export default {};
