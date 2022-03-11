import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  font-size: ${props => props.theme.fontSizes.S};
  padding: 10px;
  color: ${props => props.theme.colors.black};
`