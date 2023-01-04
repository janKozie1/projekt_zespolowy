import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { FormControl } from '@mui/material';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useExternalValidation from '../../../hooks/useExternalValidation';
import { NotificationOptions, ViewOptions, NotificationOptionsDay, Logout } from '../../../services/api/types/data';
import type { SubmitHandler } from '../../../utils/forms';
import { isEmpty } from '../../../utils/guards';
import { getDiff } from '../../../utils/object';

import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  initialData?: Partial<UserInput>;
}>;

const SettingsForm = ({ submitHandler, initialData = {} }: Props): ReactElement => {
  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
    defaultValues: initialData,
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });

  const diff = getDiff({ initialData, userInput: form.watch() });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
      <Box width="15%" >
        <Rows gap={4}>
         
        <Controller
            control={form.control}
            name="logout"
            defaultValue={Logout.yes}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="logout-label">
                  Czy mamy Cię nie wylogowywać?
                </InputLabel>
                <Select
                  {...field}
                  labelId="logout-label"
                  label="Czy mamy Cię nie wylogowywać?"
                >
                  <MenuItem value={Logout.yes}>Tak</MenuItem>
                  <MenuItem value={Logout.no}>Nie</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        <Controller
            control={form.control}
            name="notificationOption"
            defaultValue={NotificationOptions.none}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="notification-option-label">
                  Gdzie chcesz otrzymywać powiadomienia
                </InputLabel>
                <Select
                  {...field}
                  labelId="notification-option-label"
                  label="Gdzie chcesz otrzymywać powiadomienia"
                >
                  <MenuItem value={NotificationOptions.none}>Nigdzie</MenuItem>
                  <MenuItem value={NotificationOptions.email}>Email</MenuItem>
                  <MenuItem value={NotificationOptions.phone}>Numer telefonu</MenuItem>
                </Select>
              </FormControl>
            )}
          />
           <Controller
            control={form.control}
            name="notificationOptionsDay"
            defaultValue={NotificationOptionsDay .seven}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="notification-options-day-label">
                  Ile dni przed chcesz otrzymywać powiadomienia
                </InputLabel>
                <Select
                  {...field}
                  labelId="notification-options-day-label"
                  label="Ile dni przed chcesz otrzymywać powiadomienia"
                >
                  <MenuItem value={NotificationOptionsDay .seven}>7 dni</MenuItem>
                  <MenuItem value={NotificationOptionsDay .fourteen}>14 dni</MenuItem>
                  <MenuItem value={NotificationOptionsDay .twentyone}>21 dni</MenuItem>
                  <MenuItem value={NotificationOptionsDay .thirty}>30 dni</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            control={form.control}
            name="viewOptions"
            defaultValue={ViewOptions.light}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="view-option-label">
                  Preferowany wygląd strony 
                </InputLabel>
                <Select
                  {...field}
                  labelId="view-option-label"
                  label="Preferowany wygląd strony"
                >
                  <MenuItem value={ViewOptions.light}>light</MenuItem>
                  <MenuItem value={ViewOptions.dark}>dark</MenuItem>
                  
                </Select>
              </FormControl>
            )}
          />
          
        </Rows>
        </Box>
        {!isEmpty(diff) && (
          <Box mt={12} width="15%">
            <Button disabled={submitting} type="submit" variant="contained" fullWidth>
              {submitting ? <Loading variant="submit" /> : 'Zapisz'}
            </Button>
          </Box>
        )}
      </form>
    </FormProvider>
  );
};

export default SettingsForm;
