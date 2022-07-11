import styled from 'styled-components';
import { EuiIcon } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.navyDark};
  align-items: center;
`;

export const Image = styled.img`
    float: left;
    width:  100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

export const Label = styled.p`
  color: ${(props) => props.theme.color.white};
  margin: 0 10px;
  flex: 1;
`;

export const CloseIcon = styled(EuiIcon)`
  cursor: pointer;
  margin-left: auto;
  margin-right: 10px;
`;
