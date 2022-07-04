import styled from 'styled-components';
import {
  EuiButton,
  EuiSwitch,
} from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.backgroundLogin};
  flex-direction: column;
`;

export const ContainerLogin = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  width: 100%;
`;

export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  color: white;
  margin-top: 20px;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  background: ${(props) => props.theme.color.backgroundInput};
  border-style: none;
  border-radius: 8px;
  width: 100%;
  color: white;
  :focus {
    outline: none;
  }
`;

export const Button = styled(EuiButton)`
  &.euiButton--primary {
    background-color: ${(props) => props.theme.color.accent};
    color: ${(props) => props.theme.color.black} !important;
  }
  :hover {
    &.euiButton--primary {
      background-color: ${(props) => props.theme.color.accentHover};
    }
  }
  :focus {
    &.euiButton--primary {
      background-color: ${(props) => props.theme.color.accent};
    }
  }
`;

export const Switch = styled(EuiSwitch)`
  &&.euiSwitch .euiSwitch__body {
    background-color: ${(props) => props.theme.color.backgroundSwitch};
  }
  &&.euiSwitch.euiSwitch--compressed .euiSwitch__thumb {
    border-color: ${(props) => props.theme.color.accent};
    background: ${(props) => props.theme.color.accent};
  }
  &&.euiSwitch.euiSwitch--compressed .euiSwitch__button[aria-checked='false'] .euiSwitch__thumb {
    background: ${(props) => props.theme.color.switchColor};
    border-color: ${(props) => props.theme.color.switchColor};
  }
`;

export const Link = styled.a``;
