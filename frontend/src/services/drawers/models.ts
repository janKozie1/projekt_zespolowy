import { v4 } from 'uuid';

export type AnyDrawerType = 'AddEvent' | 'AddPerson';
export type AnyDrawerModel = AddEventDrawer | AddPersonDrawer;

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

export type AddPersonDrawer = Drawer<'AddPerson'>;

export const AddPersonDrawerModal = (
): AddPersonDrawer => ({
  id: v4(),
  type: 'AddPerson',
  visible: true,
});

export default {};
