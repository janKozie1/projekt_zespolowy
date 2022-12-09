import type { ReactElement } from 'react';

import HomeContainer from '../../atoms/HomeContainer';
import TextContainer from '../../organisms/TextContainer';

const Home = (): ReactElement => (
  <HomeContainer>
    <img src="https://images.pexels.com/photos/5414059/pexels-photo-5414059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" width="100%" height="100%" />
    <TextContainer />
  </HomeContainer>

);

export default Home;
