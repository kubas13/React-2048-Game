import styled from "styled-components";


export const StyledProfileWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px 0;;
`;


export const StyledProfileTitle = styled.p`
  align-self: center;
  font-size: ${props => props.theme.fontSizes.M};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.colors.pink}

`;

export const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`;

export const StyledProfileText = styled.p`
  font-size: ${props => props.theme.fontSizes.S};
  font-weight: ${props => props.theme.fontWeight.medium};
`;