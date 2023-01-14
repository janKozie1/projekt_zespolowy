import type { ReactElement, ComponentProps, ReactNode } from 'react';

import Text from '../atoms/Text';
import Tile from '../atoms/Tile';

type Props = ComponentProps<typeof Tile> & Readonly<{
  title: string;
  children?: ReactNode;
}>;

const PageHeader = ({ title, children, ...props }: Props): ReactElement => (
  <Tile width="100%" textAlign="left" {...props}>
    <Text type="subtitle" variant="default">
      {title}
    </Text>
    {children}
  </Tile>
);

export default PageHeader;
