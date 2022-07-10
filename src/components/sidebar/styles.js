import styled from 'styled-components';
import { EuiFieldSearch, EuiIcon } from '@elastic/eui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: ${({ sidebarWidth, isSidebarOpen }) => (isSidebarOpen ? sidebarWidth : 0)};
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? 0 : -200)}px;
  top: 0px; 
  background: #FFFFFF;
  transition: all 0.2s 0s linear;
  z-index: 100;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGrey};
  padding: 10px;
  height: 80px;
  width: 100%;
`;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;  
  & .euiFormControlLayout {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  & .euiFormControlLayout__childrenWrapper {
    width: 100%;
  }
`;

export const InputSearch = styled(EuiFieldSearch)`
  width: 100%;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.color.black};
`;

export const IconArrow = styled(EuiIcon)`
  color: ${(props) => props.theme.color.black};
  cursor: pointer;
`;
