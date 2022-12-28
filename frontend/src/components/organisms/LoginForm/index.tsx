import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
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

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
}>;

const LoginForm = ({ submitHandler }: Props): ReactElement => {
  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={4}>
          <Controller
            control={form.control}
            name="email"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} {...parseFieldState(fieldState)} placeholder="E-mail" variant="outlined" />
            )}
          />
          <Controller
            control={form.control}
            name="password"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField {...field} {...parseFieldState(fieldState)} placeholder="Hasło" variant="outlined" type="password" />
            )}
          />
        </Rows>
        <Box mt={12} width="100%">
          <Button disabled={submitting} type="submit" variant="contained" fullWidth>
            {submitting ? <Loading variant="submit" /> : 'Zaloguj'}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
