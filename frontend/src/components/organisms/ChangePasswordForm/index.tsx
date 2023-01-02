import type { ForwardedRef, ReactElement } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import type { UseFormReturn } from 'react-hook-form';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';
import { parseFieldState } from '../../../utils/forms';

import Columns from '../../atoms/Columns';
import Loading from '../../molecules/Loading';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type FormRef = UseFormReturn<UserInput>;
export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
}>;

const ChangePasswordForm = forwardRef((
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
        <Columns gap={4}>
          <Controller
            control={form.control}
            name="currentPassword"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} {...parseFieldState(fieldState)} placeholder="Aktualne hasło" variant="outlined" type="password" />
            )}
          />
          <Controller
            control={form.control}
            name="password"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} {...parseFieldState(fieldState)} placeholder="Nowe hasło" variant="outlined" type="password" />
            )}
          />
          <Controller
            control={form.control}
            name="repeatedPassword"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} {...parseFieldState(fieldState)} placeholder="Powtórzone hasło" variant="outlined" type="password" />
            )}
          />
        </Columns>
        <Box mt={8} width="max-content">
          <Button disabled={submitting} type="submit" variant="contained" fullWidth>
            {submitting ? <Loading variant="submit" /> : 'Zmień'}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
});

export default ChangePasswordForm;
