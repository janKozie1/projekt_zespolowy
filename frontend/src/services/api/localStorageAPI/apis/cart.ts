import { isNil, uniqBy, isEmpty } from 'lodash';
import { v4 } from 'uuid';

import type { SyncApi } from '../../types';
import { CartStatus } from '../../types/data';

import { getter, setter } from '../utils';
import { validators } from '../validators';

import { updateUser } from './user';

const cartApi: SyncApi['cart'] = {
  updateAmount: (payload) => {
    const validation = validators.cart.updateAmount(payload);

    if (validation.ok) {
      setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
        ...cart,
        gifts: cart.gifts.map((gift) => (gift.id === payload.giftId ? {
          ...gift,
          amount: payload.amount,
        } : gift)),
      } : cart)));
    }

    return validation;
  },
  allCarts: () => {
    const loggedInUser = getter('loggedInUser');
    const events = getter('events');

    if (isNil(loggedInUser)) {
      return [];
    }

    return getter('carts')
      .filter((cart) => {
        const matchingEvent = events
          .find((event) => event.id === cart.event);

        return !isNil(matchingEvent) && (matchingEvent.owner === loggedInUser.id
          || matchingEvent.members.includes(loggedInUser.id));
      });
  },
  assignTemporaryCartToEvent: (payload) => {
    const validation = validators.cart.assignTemporaryCartToEvent(payload);
    const loggedInUser = getter('loggedInUser');

    if (validation.ok && !isNil(loggedInUser)) {
      setter('carts', (carts = []) => {
        const existingCart = carts.find((cart) => cart.event === payload.event);

        if (!isNil(existingCart)) {
          return carts.map((cart) => (cart === existingCart ? {
            ...cart,
            gifts: uniqBy([...loggedInUser.temporarilySelectedGifts, ...cart.gifts], (gift) => gift.id),
          } : cart));
        }

        return carts.concat([{
          id: v4(),
          completionDate: null,
          status: CartStatus.draft,
          gifts: [...loggedInUser.temporarilySelectedGifts],
          event: payload.event,
          payments: [],
        }]);
      });

      updateUser({
        temporarilySelectedGifts: [],
      });
    }

    return validation;
  },
  removeGift: (payload) => {
    const validation = validators.cart.removeGift(payload);
    const selectedCart = getter('carts').find((cart) => cart.id === payload.cartId);

    if (validation.ok && !isNil(selectedCart)) {
      setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
        ...cart,
        gifts: cart.gifts.filter((gift) => gift.id !== payload.giftId),
      } : cart))
        .filter((cart) => !isEmpty(cart.gifts)));
    }

    return validation;
  },
  temporaryCart: {
    addGift: (payload) => {
      const validation = validators.cart.temporaryCart.addGift(payload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        updateUser({
          temporarilySelectedGifts: uniqBy(loggedInUser.temporarilySelectedGifts.concat([{
            id: payload.id,
            amount: 1,
          }]), (gift) => gift.id),
        });
      }

      return validation;
    },
    updateAmont: (payload) => {
      const validation = validators.cart.temporaryCart.updateAmont(payload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        updateUser({
          temporarilySelectedGifts: loggedInUser
            .temporarilySelectedGifts.map((gift) => (gift.id === payload.giftId ? {
              ...gift,
              amount: payload.amount,
            } : gift)),
        });
      }

      return validation;
    },
    removeGift: (payload) => {
      const validation = validators.cart.temporaryCart.removeGift(payload);
      const loggedInUser = getter('loggedInUser');

      if (validation.ok && !isNil(loggedInUser)) {
        updateUser({
          temporarilySelectedGifts: loggedInUser.temporarilySelectedGifts.filter((gift) => gift.id !== payload.id),
        });
      }

      return validation;
    },
    empty: () => {
      updateUser({ temporarilySelectedGifts: [] });
      return true;
    },
  },
  updateStatus: (payload) => {
    const validation = validators.cart.updateStatus(payload);
    const loggedInUser = getter('loggedInUser');

    if (validation.ok && !isNil(loggedInUser)) {
      setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
        ...cart,
        status: payload.status,
      } : cart)));
    }

    return validation;
  },
  finalizeCart: (payload) => {
    const validation = validators.cart.finalizeCart(payload);
    const loggedInUser = getter('loggedInUser');

    if (validation.ok && !isNil(loggedInUser)) {
      setter('carts', (carts = []) => carts.map((cart) => (cart.id === payload.cartId ? {
        ...cart,
        completionDate: new Date(),
        status: CartStatus.done,
      } : cart)));
    }

    return validation;
  },
};

export default cartApi;
