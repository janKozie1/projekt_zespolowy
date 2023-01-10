import { isNil } from 'lodash';
import isString from 'lodash/isString';
import type { ControllerFieldState, UseFormReturn } from 'react-hook-form';

import type { TextFieldProps } from '@mui/material/TextField';

import type { ValidationResult } from '../services/api/types/utils';

import type { Literal, Nullable } from './types';

export type SubmitHandler<UserInput extends Literal> = Readonly<{
  onSubmit: (input: UserInput) => Promise<ValidationResult<UserInput>>;
  onSuccess?: Nullable<(input: UserInput) => void>;
}>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFormShape = any;

export const withErrorHandler = <UserInput extends Literal>(
  submitHandler: SubmitHandler<UserInput>, form: UseFormReturn<AnyFormShape>,
): SubmitHandler<UserInput>['onSubmit'] => async (...args) => {
    const validationResult = await submitHandler.onSubmit(...args);

    if (validationResult.ok) {
      submitHandler.onSuccess?.(...args);
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

type BaseAutocompleteOpt = Readonly<{
  id: string;
}>;

type BaseAutocompleteField = Readonly<{
  value: string[];
  name: string;
}>;

const pickSelected = <T extends BaseAutocompleteOpt>(
  selected: string[], items: T[],
): T[] => items.filter((item) => selected.includes(item.id));

type AutocompleteProps<T extends BaseAutocompleteOpt> = Readonly<{
  value: T[];
  onChange: (event: unknown, selectedOpts: T[]) => void;
}>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const makeToAutocompleteProps = (form: UseFormReturn<AnyFormShape>) => {
  const { setValue } = form;

  return <T extends BaseAutocompleteOpt>(
    field: BaseAutocompleteField, options: Nullable<T[]>,
  ): AutocompleteProps<T> => ({
    value: pickSelected(field.value, options ?? []),
    onChange: (_, selectedOpts) => {
      setValue(field.name, selectedOpts.map((opt) => opt.id));
    },
  });
};

export const undefinedIfEmpty = <FieldValue>(
  parsed: FieldValue, input: string | null | undefined,
): FieldValue | undefined => {
  const isEmpty = input === null
      || input === undefined
      || (isString(input) && (input.trim() === ''));

  if (isEmpty) {
    return undefined;
  }

  return parsed;
};

export default {};
