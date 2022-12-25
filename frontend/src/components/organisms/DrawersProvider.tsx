import type { ReactElement, ReactNode } from 'react';
import { useMemo, useState } from 'react';

import type { ContextValue } from '../../hooks/useDrawers';
import { context } from '../../hooks/useDrawers';
import type { AnyDrawerModel } from '../../services/drawers/models';

import RenderDrawers from './RenderDrawers';

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
