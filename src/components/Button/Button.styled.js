import styled from "styled-components";


export const StyledButton = styled.button`
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.S};
  margin-top: 15px;
  border-radius: 10px;
  font-weight: ${props => props.theme.fontWeight.medium};
  width: 100%;
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.pink};
  transition: 0.5s;
  background-color: transparent;
  
  &:hover {
    background: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.white};
  }
`;