import type { ReactElement, ReactNode } from 'react';
import { useMemo, useState } from 'react';

import { isNil } from 'lodash';

import type { ContextValue } from '../../hooks/useDrawers';
import { context } from '../../hooks/useDrawers';
import type { AnyDrawerModel, AnyDrawerType } from '../../services/drawers/models';

import RenderDrawers from './RenderDrawers';

export const isDrawer = <T extends AnyDrawerType>(
  type: T, drawer: ContextValue['drawer'],
): drawer is Extract<AnyDrawerModel, { type: T }> => !isNil(drawer) && drawer.visible && drawer.type === type;

type Props = Readonly<{
  children: ReactNode;
}>;

const DrawersProvider = ({ children }: Props): ReactElement => {
  const [drawer, setDrawer] = useState<ContextValue['drawer']>(null);

  const contextValue = useMemo<ContextValue>(() => ({
    drawer,
    open: (newDrawer) => setDrawer(newDrawer),
    close: () => setDrawer((prev) => ({ ...prev, visible: false } as AnyDrawerModel)),
  }), [drawer]);

  return (
    <context.Provider value={contextValue}>
      <>
        <RenderDrawers drawer={drawer} />
        {children}
      </>
    </context.Provider>
  );
};

export default DrawersProvider;
