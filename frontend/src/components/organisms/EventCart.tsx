import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { isNil } from 'lodash';

import { ShoppingBagOutlined } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import type { Gift, GiftReceiver, ShoppingCart } from '../../services/api/types/data';
import { isEmpty } from '../../utils/guards';

import Rows from '../atoms/Rows';
import Text from '../atoms/Text';
import Icon from '../molecules/Icon';

import CartItem from './CartItem';

type Props = Readonly<{
  cart: ShoppingCart;
  name: string;
  emptyCartMessage: string;
  giftMap: Map<string, Gift>;
  receiver?: GiftReceiver;
  onRemove: (gift: Gift) => void;
  onUpdateAmount: (gift: Gift, amount: number) => void;
  children?: ReactNode;
}>;

const EventCart = ({
  cart, name, emptyCartMessage, giftMap, receiver, onRemove, onUpdateAmount, children,
}: Props): ReactElement => (
  <Accordion defaultExpanded={!isEmpty(cart.gifts)}>
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
          {isEmpty(cart.gifts) ? (
            <Box width="100%" height="100%" flexDirection="column" display="flex" alignItems="center" justifyContent="center">
              <Text type="body" variant="default">{emptyCartMessage}</Text>
              <Box mt={2}>
                <Icon size="lg">
                  <ShoppingBagOutlined />
                </Icon>
              </Box>
            </Box>
          ) : cart.gifts.map((gift) => {
            const product = giftMap.get(gift.id);

            return isNil(product)
              ? null
              : (
                <CartItem key={gift.id} gift={product} onRemove={onRemove}>
                  <Box ml="auto" mr="auto" width="10%">
                    <TextField
                      label="Ilość"
                      type="number"
                      size="small"
                      defaultValue={gift.amount}
                      InputProps={{ inputProps: { min: 1 } }}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => onUpdateAmount(product, Number(e.target.value))}
                    />
                  </Box>
                </CartItem>
              );
          })}
        </Rows>
        {children}
      </Box>
    </AccordionDetails>
  </Accordion>
);

export default EventCart;
