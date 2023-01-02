import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';
import { isEmpty } from '../../../utils/guards';
import { getDiff } from '../../../utils/object';

import Rows from '../../atoms/Rows';
import AddressFieldGroup from '../../molecules/AddressFieldGroup.index';
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
          <AddressFieldGroup />
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
