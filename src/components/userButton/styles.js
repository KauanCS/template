import styled from 'styled-components';
import { EuiIcon } from '@elastic/eui';

export const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.backgroundUserButton};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Icon = styled(EuiIcon)`
  color: white;
`;
