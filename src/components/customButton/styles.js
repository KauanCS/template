import styled from 'styled-components';
import { EuiIcon } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled(EuiIcon)`
  color: ${(props) => (props.selected ? props.theme.color.accent : props.theme.color.black)};
`;

export const Text = styled.p`
  font-weight: 500;
  margin-right: auto;
  margin-left: 30px;
  color: ${(props) => (props.selected ? props.theme.color.accent : props.theme.color.black)};
`;
