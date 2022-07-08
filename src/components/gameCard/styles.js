import styled from 'styled-components';
import { EuiButton } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  border: 2px solid ${({ showInfo, theme }) => (showInfo ? theme.color.accent : 'rgba(0,0,0,0)')};
  border-radius: 5px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
  transition: all 0.1s 0s linear;
  gap: 10px;
  opacity: 0;
  ${({ showInfo }) => showInfo && (`
    opacity: 1;
  `)}
`;

export const BackgroundDark = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${({ showInfo }) => (showInfo ? '1' : '0')};
  ${({ showInfo }) => showInfo && (`
    background-color: rgba(0,0,0,.8);
  `)}
`;

export const Title = styled.p`
  color: ${(props) => props.theme.color.white};
`;

export const Price = styled.p`
  color: ${(props) => props.theme.color.accent};
`;

export const Image = styled.img`
    float: left;
    width:  300px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
`;

export const Button = styled(EuiButton)``;
