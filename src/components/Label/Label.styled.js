import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const StyledText = styled.span`
  font-size: ${props => props.theme.fontSizes.S};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.black};
  text-transform: capitalize;
`;