import styled from "styled-components";


export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px 0;

`;

export const StyledScoreTitle = styled.p`
  font-size: ${props => props.theme.fontSizes.M};
  font-weight: ${props => props.theme.fontWeight.bold};
  align-self: center;

`;

export const StyledPlayerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: lightgray;
    bottom: -7px;
  }



`;


export const StyledPlayerName = styled.p`
  font-weight: ${props => props.theme.fontWeight.medium};
`;

export const StyledScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px 0;
`


export const StyledScoreValue = styled.p`
  font-size: ${props => props.theme.fontSizes.S};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.pink}
  `



