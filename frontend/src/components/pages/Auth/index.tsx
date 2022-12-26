
import type { ReactElement } from 'react';
import { useEffect } from 'react';

import isNil from 'lodash/isNil';
import { useNavigate } from 'react-router';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

import { AuthRoutes, BaseRoutes, HomeRoutes } from '../../../config/paths';
import useApiRequest, { emptyArgs } from '../../../hooks/useApiRequest';

import Rows from '../../atoms/Rows';
import Tile from '../../atoms/Tile';
import Loading from '../../molecules/Loading';
import { useAPI } from '../../organisms/ApiProvider';
import type { Props as LoginFormProps } from '../../organisms/LoginForm';
import LoginForm from '../../organisms/LoginForm';
import type { Props as RegisterFormProps } from '../../organisms/RegisterForm';
import RegisterForm from '../../organisms/RegisterForm';

type Props = Readonly<{
  type: 'login' | 'logout' | 'register';
}>;

const AuthPage = ({ type }: Props): ReactElement | null => {
  const { api } = useAPI();
  const navigate = useNavigate();

  const [loggedInUser, { loading }] = useApiRequest(api.auth.loggedInUser, { immediateArgs: emptyArgs });

  const switchType = () => {
    navigate(type === 'login' ? AuthRoutes.REGISTER : AuthRoutes.LOGIN);
  };

  const loginSubmitHandler: LoginFormProps['submitHandler'] = {
    onSubmit: async (data) => api.auth.login(data),
    onSuccess: () => navigate(BaseRoutes.BASE),
  };

  const registerSubmitHandler: RegisterFormProps['submitHandler'] = {
    onSubmit: async (data) => api.auth.register(data),
    onSuccess: () => navigate(BaseRoutes.BASE),
  };

  useEffect(() => {
    void (async () => {
      if (!isNil(loggedInUser) && !isNil(loggedInUser.data)) {
        if (type === 'logout') {
          await api.auth.logout();
          navigate(HomeRoutes.HOME);
        } else {
          navigate(BaseRoutes.BASE);
        }
      }
    })();
  }, [type, navigate, loggedInUser, api]);

  if (type === 'logout' || loading) {
    return <Loading />;
  }

  if (!isNil(loggedInUser) && !isNil(loggedInUser.data)) {
    return null;
  }

  return (
    <Tile>
      <Rows gap={8}>
        <TabContext value={type}>
          <TabList onChange={switchType}>
            <Tab label="Logowanie" value="login" />
            <Tab label="Rejestracja" value="register" />
          </TabList>
        </TabContext>
        {type === 'login' ? <LoginForm submitHandler={loginSubmitHandler} /> : null}
        {type === 'register' ? <RegisterForm submitHandler={registerSubmitHandler} /> : null}
      </Rows>
    </Tile>
  );
};

export default AuthPage;
