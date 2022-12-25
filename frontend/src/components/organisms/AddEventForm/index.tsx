import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import useExternalValidation from '../../../hooks/useExternalValidation';
import usePromise, { emptyArgs } from '../../../hooks/usePromise';
import type { SubmitHandler } from '../../../utils/forms';
import { parseFieldState, makeToAutocompleteProps } from '../../../utils/forms';

import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';
import { useAPI } from '../ApiProvider';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
}>;

const AddEventForm = ({ submitHandler }: Props): ReactElement => {
  const api = useAPI();

  const [categories, { loading: categoriesLoading }] = usePromise(api.event.allCategories, {
    immediateArgs: emptyArgs,
  });
  const [members, { loading: membersLoading }] = usePromise(api.user.allUsers, {
    immediateArgs: emptyArgs,
  });
  const [loggedInUser] = usePromise(api.auth.loggedInUser, {
    immediateArgs: emptyArgs,
  });

  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });
  const toAutocompleteProps = makeToAutocompleteProps(form);

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={8}>
          <Controller
            control={form.control}
            name="name"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                {...parseFieldState(fieldState)}
                label="Nazwa"
                placeholder="Nazwa"
                variant="outlined"
              />
            )}
          />
          <Controller
            control={form.control}
            name="description"
            defaultValue=""
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                {...parseFieldState(fieldState)}
                label="Opis"
                placeholder="Opis"
                variant="outlined"
              />
            )}
          />
          <Controller
            control={form.control}
            name="categories"
            defaultValue={[]}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                {...toAutocompleteProps(field, categories?.data)}
                multiple
                options={categories?.data ?? []}
                loading={categoriesLoading}
                getOptionLabel={(option) => option.name}
                noOptionsText="Brak opcji"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...parseFieldState(fieldState)}
                    variant="outlined"
                    label="Kategorie"
                    placeholder="Kategorie"
                  />
                )}
              />
            )}
          />
          <Controller
            control={form.control}
            name="members"
            defaultValue={[]}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                {...toAutocompleteProps(field, members?.data)}
                multiple
                options={members?.data ?? []}
                loading={membersLoading}
                getOptionLabel={(option) => option.email}
                getOptionDisabled={(option) => option.id === loggedInUser?.data?.id}
                noOptionsText="Brak opcji"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...parseFieldState(fieldState)}
                    variant="outlined"
                    label="Członkowie"
                    placeholder="Członkowie"
                  />
                )}
              />
            )}
          />
        </Rows>
        <Box mt={12} width="100%">
          <Button disabled={submitting} type="submit" variant="contained" fullWidth>
            {submitting ? <Loading variant="submit" /> : 'Utwórz'}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default AddEventForm;
