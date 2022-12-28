import { forwardRef, useImperativeHandle } from 'react';
import type { ReactElement, ForwardedRef } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import type { UseFormReturn } from 'react-hook-form';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';
import { parseFieldState } from '../../../utils/forms';

import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type FormRef = UseFormReturn<UserInput>;
export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
}>;

const FriendRequestForm = forwardRef((
  { submitHandler }: Props,
  ref: ForwardedRef<FormRef>,
): ReactElement => {
  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
  });

  useImperativeHandle(ref, () => form);
  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={4}>
          <Controller
            control={form.control}
            name="friendEmail"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                {...parseFieldState(fieldState)}
                label="E-mail znajomego"
                placeholder="test@gmail.com"
                variant="outlined"
              />
            )}
          />
        </Rows>
        <Box mt={8} width="100%">
          <Button disabled={submitting} type="submit" variant="contained" fullWidth>
            {submitting ? <Loading variant="submit" /> : 'Zaproś'}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
});

export default FriendRequestForm;
