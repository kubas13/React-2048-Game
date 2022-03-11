import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledScoreValue = styled.p`
  font-size: ${props => props.theme.fontSizes.S};
  font-weight: ${props => props.theme.fontWeight.medium};
  padding: 5px 10px;
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.pink};
`;
