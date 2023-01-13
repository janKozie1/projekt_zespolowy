import api from '../services/api';
import type {
  Event, GiftReceiver, ShoppingCart, User,
} from '../services/api/types/data';
import { compareDays } from '../utils/date';
import type { Nullable } from '../utils/types';

import useApiRequest, { emptyArgs } from './useApiRequest';

export type UpcomingEvent = Omit<Event, 'giftReceiver' | 'owner'> & Readonly<{
  ownerId: string;
  giftReceiver: Nullable<GiftReceiver>;
  associatedShoppingCart: Nullable<ShoppingCart>;
  owner: Nullable<User>;
}>;

export const makeToUpcomingEvent = (users: User[], shoppingCarts: ShoppingCart[]) => (event: Event): UpcomingEvent => {
  const associatedShoppingCart = shoppingCarts.find((cart) => cart.event === event.id);

  const owner = users.find((user) => user.id === event.owner);

  const giftReceiver = owner?.giftReceivers
    .find((receiver) => receiver.id === event.giftReceiver);

  return {
    ...event,
    ownerId: event.owner,
    associatedShoppingCart,
    owner,
    giftReceiver,
  };
};

type UseUpcomingEventsReturnValue = Readonly<{
  loading: boolean;
  upcomingEvents: UpcomingEvent[];
}>;

type UseUpcomingEventsArg = Readonly<{
  limit?: Nullable<number>;
  includePast?: Nullable<boolean>;
}>;

const useUpcomingEvents = ({ limit, includePast }: UseUpcomingEventsArg = {}): UseUpcomingEventsReturnValue => {
  const [events, { loading: eventsLoading }] = useApiRequest(api.event.allUserEvents, {
    immediateArgs: emptyArgs,
  });

  const [shoppingCarts, { loading: cartsLoading }] = useApiRequest(api.cart.allCarts, {
    immediateArgs: emptyArgs,
  });

  const [users, { loading: usersLoading }] = useApiRequest(api.user.allUsers, {
    immediateArgs: emptyArgs,
  });

  const today = new Date();

  const loading = eventsLoading || cartsLoading || usersLoading;

  const upcomingEvents = (events?.data ?? [])
    .filter((event) => (includePast ?? false) || compareDays(today, event.date) <= 0)
    .slice(0, limit ?? 30)
    .map(makeToUpcomingEvent(users?.data ?? [], shoppingCarts?.data ?? []));

  return {
    loading,
    upcomingEvents,
  };
};

export default useUpcomingEvents;
