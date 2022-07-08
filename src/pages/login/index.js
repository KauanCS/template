import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ContainerLogin,
  ContainerInputs,
  ContainerBottom,
  Input,
  Button,
  Switch,
  Link,
  Form,
  ErrorText,
} from './styles';

import { loginSchema } from './schema';

import Logo from '../../components/logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const navigate = useNavigate();

  const handleSwitch = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await loginSchema.validate({
        email,
        password,
      });
      navigate('/home');
    } catch {
      setHasErrors(true);
    }
  };

  return (
    <Container>
      <ContainerLogin>
        <Logo />
        <Form>
          <ContainerInputs>
            <Input
              placeholder="E-MAIL"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              er
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
            onClick={handleSubmit}
            type="submit"
          >
            ENTRAR
          </Button>
        </Form>
        { hasErrors && (
          <ErrorText>Email ou senha inválido!</ErrorText>
        )}
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
