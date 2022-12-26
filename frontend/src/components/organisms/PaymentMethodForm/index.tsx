import type { ReactElement } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm, Controller } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import useExternalValidation from '../../../hooks/useExternalValidation';
import type { SubmitHandler } from '../../../utils/forms';
import { isEmpty } from '../../../utils/guards';
import { getDiff } from '../../../utils/object';

import Rows from '../../atoms/Rows';
import Loading from '../../molecules/Loading';
import { useConstantData } from '../ConstantDataProvider';

import type { UserInput } from './formSchema';
import formSchema from './formSchema';

export type Props = Readonly<{
  submitHandler: SubmitHandler<UserInput>;
  initialData?: Partial<UserInput>;
}>;

const PaymentMethodForm = ({ submitHandler, initialData = {} }: Props): ReactElement => {
  const { paymentMethods } = useConstantData();

  const form = useForm<UserInput>({
    resolver: yupResolver(formSchema),
    defaultValues: initialData,
  });

  const { onSubmit, submitting } = useExternalValidation({ submitHandler, form });

  const diff = getDiff({ initialData, userInput: form.watch() });

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit}>
        <Rows gap={8}>
          <Controller
            control={form.control}
            name="preferredPaymentMethod"
            defaultValue=""
            render={({ field }) => (
              <RadioGroup {...field}>
                {paymentMethods.map((method) => (
                  <FormControlLabel
                    key={method.id}
                    value={method.id}
                    control={<Radio />}
                    label={(
                      <Box display="flex" alignItems="center" gap={2}>
                        <img height="20px" src={method.imageURL} alt={method.name} />
                        <span>{method.name}</span>
                      </Box>
                    )}
                  />
                ))}
              </RadioGroup>
            )}
          />
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

export default PaymentMethodForm;
