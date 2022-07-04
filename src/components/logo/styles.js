import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const AltText = styled.h1`
  color: ${(props) => props.theme.color.accent};
  font-size: 28px;
`;

export const Text = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: 28px;
`;
