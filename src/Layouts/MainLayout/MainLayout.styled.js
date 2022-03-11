import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 50px 0;
`;

export const StyledContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;