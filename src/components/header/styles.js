import styled from 'styled-components';
import { EuiIcon } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  height: 80px;
  align-items: center;
  background-color: ${(props) => props.theme.color.navyDark};
  justify-content: space-between;
`;

export const ContainerSides = styled.div`
  display: flex;
`;

export const IconMenu = styled(EuiIcon)`
  color: ${(props) => props.theme.color.accent};
  margin: 0 20px;
  cursor: pointer;
`;
