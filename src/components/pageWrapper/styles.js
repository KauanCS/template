import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${(props) => props.theme.color.backgroundWrapper};
`;
export const ContainerComponents = styled.div`
  display: flex;
  padding-left: ${({ sidebarWidth, isSidebarOpen }) => (isSidebarOpen ? sidebarWidth : 0)};
  transition: all 0.2s 0s linear;
  flex-direction: column;
  width: 100%;
`;
