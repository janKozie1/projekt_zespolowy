import type { ReactElement, ComponentProps } from 'react';

import Text from '../atoms/Text';
import Tile from '../atoms/Tile';

type Props = ComponentProps<typeof Tile> & Readonly<{
  title: string;
}>;

const PageHeader = ({ title, ...props }: Props): ReactElement => (
  <Tile width="100%" textAlign="left" {...props}>
    <Text type="subtitle" variant="default">
      {title}
    </Text>
  </Tile>
);

export default PageHeader;
