import styled from 'styled-components';
import { EuiButton } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContainerImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  padding: 20px;
`;

export const ContainerContent = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const ContainerLeft = styled.div`
  width: 70%;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const ContainerPath = styled.div`
  display: flex;
  width: 35%;
`;

export const ComponentItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.navyDark};
  border-radius: 5px;
  padding: ${(props) => (props.big ? '20px' : '10px')};
  width: 100%;
  height: min-content;
`;

export const ItemTitle = styled.p`
  color: ${(props) => props.theme.color.accent};
  margin-bottom: ${(props) => (props.big ? '10px' : '3px')};
  font-size: ${(props) => (props.big ? '20px' : '15px')};
`;

export const ItemText = styled.p`
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
`;

export const Title = styled.h1`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 28px;
  color: ${(props) => props.theme.color.white};
`;

export const LabelPath = styled.p`
  color: ${(props) => props.theme.color.white};
  margin-right: 5px;
  font-size: 18px;
`;

export const LabelGame = styled.p`
  color: ${(props) => props.theme.color.accent};
  font-size: 18px;
`;

export const Image = styled.img`
  float: left;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Line = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.navyDark};
  align-self: center;
`;

export const Button = styled(EuiButton)``;
