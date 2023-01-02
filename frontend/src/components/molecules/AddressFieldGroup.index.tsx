import type { ReactElement } from 'react';

import { Controller, useFormContext } from 'react-hook-form';
import * as yup from 'yup';

import TextField from '@mui/material/TextField';

import { parseFieldState } from '../../utils/forms';
import { isEmpty } from '../../utils/guards';
import { withNamePrefix } from '../../utils/string';

import Columns from '../atoms/Columns';

export const addressFielGroupSchema = yup.object({
  nameAndSurname: yup
    .string()
    .required(),
  streetAddress: yup
    .string()
    .required(),
  town: yup
    .string()
    .required(),
  postalCode: yup
    .string()
    .required()
    .test('validPostalCode', 'Musi być w formacie 11-111', (value) => {
      if (isEmpty(value)) {
        return true;
      }

      return /^\d{2}-\d{3}$/.test(value);
    }),
});

export type UserInput = yup.InferType<typeof addressFielGroupSchema>;

type Props = Readonly<{
  prefix?: string;
  vertical?: boolean;
}>;

const AddressFieldGroup = ({ prefix, vertical = false }: Props): ReactElement => {
  const form = useFormContext<UserInput>();

  const cityAndZipcode = (
    <>
      <Controller
        control={form.control}
        name={withNamePrefix(prefix, 'postalCode')}
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
        name={withNamePrefix(prefix, 'town')}
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
    </>
  );

  return (
    <>
      <Controller
        control={form.control}
        name={withNamePrefix(prefix, 'nameAndSurname')}
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
        name={withNamePrefix(prefix, 'streetAddress')}
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
      {vertical ? cityAndZipcode : (
        <Columns gap={4}>
          {cityAndZipcode}
        </Columns>
      )}

    </>
  );
};

export default AddressFieldGroup;
