import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerCategory = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  white-space: nowrap;
`;

export const ContainerGames = styled.div`
  display: flex;
  gap: 5px;
`;

export const Line = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.navyDark};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};;
  font-weight: 500;
  font-size: 28px;
  margin-right: 15px;
`;
