import { v4 } from 'uuid';

import type { Event } from '../api/types/data';

export type AnyDrawerType = 'AddEvent' | 'AddPerson' | 'EditEvent';
export type AnyDrawerModel = AddEventDrawer | AddPersonDrawer | EditEventDrawer;

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

export const AddPersonDrawerModal = (
): AddPersonDrawer => ({
  id: v4(),
  type: 'AddPerson',
  visible: true,
});

export default {};
