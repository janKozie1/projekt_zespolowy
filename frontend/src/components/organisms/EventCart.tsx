import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { isNil } from 'lodash';

import { ShoppingBagOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import type { Gift, GiftReceiver, ShoppingCart } from '../../services/api/types/data';
import { isEmpty, isNotNil } from '../../utils/guards';

import Divider from '../atoms/Divider';
import Rows from '../atoms/Rows';
import Text from '../atoms/Text';
import Icon from '../molecules/Icon';

import CartItem from './CartItem';

type Props = Readonly<{
  cart: Pick<ShoppingCart, 'gifts'>;
  name: string;
  emptyCartMessage: string;
  giftMap: Map<string, Gift>;
  receiver?: GiftReceiver;
  onRemove?: (gift: Gift) => void;
  onUpdateAmount?: (gift: Gift, amount: number) => void;
  renderTotal?: (total: number) => ReactNode;
  children?: ReactNode;
  defaultExpanded?: boolean;
}>;

const EventCart = ({
  cart,
  name,
  emptyCartMessage,
  giftMap,
  receiver,
  onRemove,
  onUpdateAmount,
  renderTotal,
  children,
  defaultExpanded = false,
}: Props): ReactElement => {
  const gifts = cart.gifts.map((gift) => {
    const product = giftMap.get(gift.id);
    return isNil(product) ? null : { ...gift, ...product };
  }).filter(isNotNil);

  const defaultRenderTotal = (total: number) => (
    <Text type="body" variant="default">
      Łącznie:
      {' '}
      {total}
      {' '}
      zł
    </Text>
  );

  return (
    <Accordion defaultExpanded={defaultExpanded || !isEmpty(cart.gifts)}>
      <AccordionSummary expandIcon={<Box px={2}><ExpandMoreIcon /></Box>}>
        <Box px={4} display="flex" flexDirection="column" gap={2}>
          <Text type="body" variant="default">{name}</Text>
          {!isNil(receiver) && (
            <Text type="caption" variant="default">
              {`Dla: ${receiver.address.nameAndSurname}`}
            </Text>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box px={4} pb={4}>
          <Rows gap={4}>
            {isEmpty(gifts) ? (
              <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
                <Text type="body" variant="default">{emptyCartMessage}</Text>
                <Box mt={2}>
                  <Icon size="lg">
                    <ShoppingBagOutlined />
                  </Icon>
                </Box>
              </Box>
            ) : (
              <>
                {gifts.map((gift) => {
                  const product = giftMap.get(gift.id);

                  return isNil(product)
                    ? null
                    : (
                      <CartItem key={gift.id} gift={product} onRemove={onRemove}>
                        <Box ml="auto" mr="auto" width="10%" position="relative">
                          <TextField
                            label="Ilość"
                            type={isNil(onUpdateAmount) ? 'text' : 'number'}
                            size="small"
                            disabled={isNil(onUpdateAmount)}
                            defaultValue={gift.amount}
                            InputProps={{ inputProps: { min: 1 } }}
                            onChange={(
                              e: ChangeEvent<HTMLInputElement>,
                            ) => onUpdateAmount?.(product, Number(e.target.value))}
                          />
                          <Box position="absolute" top="100%" mt={2}>
                            <Text type="caption" variant="default">
                              Łącznie:
                              {' '}
                              <b>{`${product.price * gift.amount}zł`}</b>
                            </Text>
                          </Box>

                        </Box>
                      </CartItem>
                    );
                })}
                <Divider />
                <Box display="flex" justifyContent="flex-end">
                  {(renderTotal ?? defaultRenderTotal)(gifts.reduce((acc, gift) => gift.price * gift.amount + acc, 0))}
                </Box>
              </>
            )}
          </Rows>
          {children}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default EventCart;
