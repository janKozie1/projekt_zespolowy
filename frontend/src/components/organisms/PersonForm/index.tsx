import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';
import { parseFieldState, makeToAutocompleteProps } from '../../../utils/forms';

import Rows from '../../atoms/Rows';
import AddressFieldGroup from '../../molecules/AddressFieldGroup.index';
import Loading from '../../molecules/Loading';
import { useConstantData } from '../ConstantDataProvider';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  initialData?: Partial<UserInput>;
}>;

const PersonForm = ({ submitHandler, initialData }: Props): ReactElement => {
  const { giftCategories } = useConstantData();

  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
    defaultValues: initialData,
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });
  const toAutocompleteProps = makeToAutocompleteProps(form);

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={8}>
          <AddressFieldGroup
            vertical
            prefix="address"
          />
          <Controller
            control={form.control}
            name="preferredCategories"
            defaultValue={[]}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                {...toAutocompleteProps(field, giftCategories)}
                multiple
                options={giftCategories}
                getOptionLabel={(option) => option.name}
                noOptionsText="Brak opcji"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...parseFieldState(fieldState)}
                    variant="outlined"
                    label="Preferowane kategorie prezentów"
                    placeholder="Kategorie"
                  />
                )}
              />
            )}
          />
        </Rows>
        <Box mt={12} width="100%">
          <Button disabled={submitting} type="submit" variant="contained" fullWidth>
            {submitting ? <Loading variant="submit" /> : 'Zapisz'}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default PersonForm;
