import { useState } from 'react';

import {
  Container,
  ContainerLogin,
  ContainerInputs,
  ContainerBottom,
  Input,
  Button,
  Switch,
  Link,
} from './styles';

import Logo from '../../components/logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <Container>
      <ContainerLogin>
        <Logo />
        <ContainerInputs>
          <Input
            placeholder="E-MAIL"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="SENHA"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </ContainerInputs>

        <Button
          fullWidth
        >
          ENTRAR
        </Button>
        <ContainerBottom>
          <Switch
            label="PERMANECER LOGADO"
            checked={checked}
            onChange={handleSwitch}
            compressed
          />
          <Link href="/">Cadastrar</Link>
        </ContainerBottom>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
