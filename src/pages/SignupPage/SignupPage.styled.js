import styled from "styled-components";


export const StyledSignupWrapper = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  gap: 20px;
  align-items: center;
  padding: 20px;
  max-width: 800px;
`;

export const StyledSignupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeight.medium};
  width: 100%;
  gap: 20px;
`;

export const StyledTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.M};
  font-weight: ${props => props.theme.fontWeight.bold};
`;