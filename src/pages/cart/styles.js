import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: 28px;
  margin-right: 15px;
  text-align: center;
`;
