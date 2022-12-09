import type { ReactNode, ReactElement } from 'react';

type Props = Readonly<{
  children: ReactNode;
}>;

const Text = ({ children }: Props): ReactElement => <span>{children}</span>;

export default Text;
