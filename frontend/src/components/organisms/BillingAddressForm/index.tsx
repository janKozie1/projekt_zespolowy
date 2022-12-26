import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';
import { parseFieldState } from '../../../utils/forms';
import { isEmpty } from '../../../utils/guards';
import { getDiff } from '../../../utils/object';

import Columns from '../../atoms/Columns';
import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  initialData?: Partial<UserInput>;
}>;

const BillingAddressForm = ({ submitHandler, initialData = {} }: Props): ReactElement => {
  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
    defaultValues: initialData,
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });

  const diff = getDiff({ initialData, userInput: form.watch() });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={4}>
          <Controller
            control={form.control}
            name="nameAndSurname"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                {...parseFieldState(fieldState)}
                label="Imię i nazwisko"
                placeholder="Jan Kowalski"
                variant="outlined"
              />
            )}
          />
          <Controller
            control={form.control}
            name="streetAddress"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                {...parseFieldState(fieldState)}
                label="Ulica i numer mieszkania"
                placeholder="Polna X/Y"
                variant="outlined"
              />
            )}
          />
          <Columns gap={4}>
            <Controller
              control={form.control}
              name="postalCode"
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  {...parseFieldState(fieldState)}
                  onChange={(e) => {
                    if (/^[\d-]*$/.test(e.target.value)) {
                      field.onChange(e);
                    }
                  }}
                  label="Kod pocztowy"
                  placeholder="11-111"
                  variant="outlined"
                />
              )}
            />
            <Controller
              control={form.control}
              name="town"
              defaultValue=""
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  {...parseFieldState(fieldState)}
                  label="Miasto"
                  placeholder="Miasto"
                  variant="outlined"
                />
              )}
            />
          </Columns>
        </Rows>
        {!isEmpty(diff) && (
          <Box mt={12} width="100%">
            <Button disabled={submitting} type="submit" variant="contained" fullWidth>
              {submitting ? <Loading variant="submit" /> : 'Zapisz'}
            </Button>
          </Box>
        )}
      </form>
    </FormProvider>
  );
};

export default BillingAddressForm;
