import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';

import Rows from '../../atoms/Rows';
import Text from '../../atoms/Text';
import AddressFieldGroup from '../../molecules/AddressFieldGroup.index';
import Loading from '../../molecules/Loading';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  initialData?: Partial<UserInput>;
}>;

const FinalizeEventForm = ({ submitHandler, initialData }: Props): ReactElement => {
  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
    defaultValues: initialData,
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={8}>
          <Rows gap={4}>
            <Text type="body" variant="default">
              Adres dostawy
            </Text>
            <AddressFieldGroup
              vertical
              prefix="deliveryAddress"
            />
          </Rows>
          <Rows gap={4}>
            <Text type="body" variant="default">
              Adres rozliczeniowy
            </Text>
            <AddressFieldGroup
              vertical
              prefix="billingAddress"
            />
          </Rows>
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

export default FinalizeEventForm;
