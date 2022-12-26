import type { FormEventHandler } from 'react';
import { useState } from 'react';

import type { UseFormReturn } from 'react-hook-form';

import type { AnyFormShape, SubmitHandler } from '../utils/forms';
import { withErrorHandler } from '../utils/forms';
import type { Literal } from '../utils/types';

type UseExternalValidationArg<UserInput extends Literal> = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  form: UseFormReturn<AnyFormShape>;
}>;

type UseExternalValidationReturnValue = Readonly<{
  onSubmit: FormEventHandler;
  submitting: boolean;
}>;

const useExternalValidation = <UserInput extends Literal>({
  submitHandler, form,
}: UseExternalValidationArg<UserInput>): UseExternalValidationReturnValue => {
  const [submitting, setSubmitting] = useState(false);

  const wrappedSubmit = withErrorHandler(submitHandler, form);

  const onSubmit = async (input: UserInput) => {
    setSubmitting(true);
    await wrappedSubmit(input);
    setSubmitting(false);
  };

  return {
    submitting,
    onSubmit: form.handleSubmit(onSubmit),
  };
};

export default useExternalValidation;
