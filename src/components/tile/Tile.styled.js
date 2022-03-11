import styled from "styled-components";

export const StyledTile = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const StyledTileValue = styled.div`
  font-size: ${props => props.theme.fontSizes.L};
  color: ${props => props.theme.colors.white};
`;
