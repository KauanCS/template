import styled from 'styled-components';
import { EuiIcon } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 30px;
`;

export const Icon = styled(EuiIcon)`
  color: ${(props) => props.theme.color.accent};
`;

export const Circle = styled.div`
  height: 15px;
  width: 15px;
  position: absolute;
  right: -5px;
  top: -5px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 12px;
`;
