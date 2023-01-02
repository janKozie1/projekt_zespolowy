import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import { FormControl } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import useExternalValidation from '../../../hooks/useExternalValidation';
import { RepeatsEvery } from '../../../services/api/types/data';
import type { SubmitHandler } from '../../../utils/forms';
import { parseFieldState, makeToAutocompleteProps } from '../../../utils/forms';

import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';
import { useConstantData } from '../ConstantDataProvider';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  initialData?: Partial<UserInput>;
}>;

const EventForm = ({ submitHandler, initialData }: Props): ReactElement => {
  const { eventCategories, users, loggedInUser } = useConstantData();

  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
    defaultValues: initialData,
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });
  const toAutocompleteProps = makeToAutocompleteProps(form);

  const allowedEventCategories = eventCategories
    .filter((category) => !category.builtInEventCategory || (initialData?.categories ?? []).includes(category.id));
  const allowedUsers = users
    .filter((user) => loggedInUser.friends.includes(user.id) || (initialData?.members ?? []).includes(user.id));

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
                {...toAutocompleteProps(field, allowedEventCategories)}
                multiple
                options={allowedEventCategories}
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
            name="needGifts"
            defaultValue={[]}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                {...toAutocompleteProps(field, loggedInUser.giftReceivers)}
                multiple
                options={loggedInUser.giftReceivers}
                getOptionLabel={(option) => option.address.nameAndSurname}
                noOptionsText="Brak opcji"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...parseFieldState(fieldState)}
                    variant="outlined"
                    label="Osoby potrzebujące prezentu"
                    placeholder="Osoby potrzebujące prezentu"
                  />
                )}
              />
            )}
          />
          <Controller
            control={form.control}
            name="repeatsEvery"
            defaultValue={RepeatsEvery.never}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="repeats-every-label">
                  Powtarza się
                </InputLabel>
                <Select
                  {...field}
                  labelId="repeats-every-label"
                  label="Powtarza się"
                >
                  <MenuItem value={RepeatsEvery.never}>Nigdy</MenuItem>
                  <MenuItem value={RepeatsEvery.week}>Co tydzień</MenuItem>
                  <MenuItem value={RepeatsEvery.month}>Co miesiąc</MenuItem>
                  <MenuItem value={RepeatsEvery.year}>Co rok</MenuItem>
                  <MenuItem value={RepeatsEvery.decade}>Co dekadę</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={form.control}
            name="members"
            defaultValue={[]}
            render={({ field, fieldState }) => (
              <Autocomplete
                {...field}
                {...toAutocompleteProps(field, allowedUsers)}
                multiple
                options={allowedUsers}
                getOptionLabel={(option) => option.email}
                getOptionDisabled={(option) => option.id === loggedInUser.id}
                noOptionsText="Brak opcji"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...parseFieldState(fieldState)}
                    variant="outlined"
                    label="Członkowie zrzutki"
                    placeholder="Członkowie zrzutki"
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

export default EventForm;
