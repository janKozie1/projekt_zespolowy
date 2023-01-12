import { v4 } from 'uuid';

import type { Event, ShoppingCart } from '../api/types/data';

export type AnyDrawerType = 'AddEvent' | 'AddPerson' | 'EditEvent' | 'FinishCart';
export type AnyDrawerModel = AddEventDrawer | AddPersonDrawer | EditEventDrawer | FinishCartDrawer;

interface Drawer<T extends AnyDrawerType> {
  id: string;
  visible: boolean;
  type: T;
}
type NonEditableParams = keyof Drawer<AnyDrawerType>;

export interface AddEventDrawer extends Drawer<'AddEvent'> {
  date: Date;
}

export const AddEventDrawerModel = (
  { date }: Omit<AddEventDrawer, NonEditableParams>,
): AddEventDrawer => ({
  date,
  id: v4(),
  type: 'AddEvent',
  visible: true,
});

export interface EditEventDrawer extends Drawer<'EditEvent'> {
  event: Event;
}

export const EditEventDrawerModel = (
  { event }: Omit<EditEventDrawer, NonEditableParams>,
): EditEventDrawer => ({
  event,
  id: v4(),
  type: 'EditEvent',
  visible: true,
});

export type AddPersonDrawer = Drawer<'AddPerson'>;

export const AddPersonDrawerModel = (
): AddPersonDrawer => ({
  id: v4(),
  type: 'AddPerson',
  visible: true,
});

export interface FinishCartDrawer extends Drawer<'FinishCart'> {
  cart: ShoppingCart;
}

export const FinishCartDrawerModel = ({
  cart,
}: Omit<FinishCartDrawer, NonEditableParams>): FinishCartDrawer => ({
  id: v4(),
  cart,
  type: 'FinishCart',
  visible: true,
});

export default {};
