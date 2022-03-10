import styled from "styled-components";


export const StyledWrapper = styled.div`
    width:100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap:30px 0;
  
`;


const theme ={
    fontSizes:{
        S: '20',
        M: '22',
        L:'24'
    },
    fontWeight:{
        medium:500,
    },
}


export const StyledScoreTitle = styled.p`
    font-size:32px;
  font-weight: 700;
  align-self: center;
  
`;

export const StyledPlayerContainer = styled.div`
    width:100%;
    display: flex;
  justify-content: space-between;
  position: relative;
  
  ::after {
    position: absolute;
    content: '';
    width:100%;
    height: 2px;
    background-color: lightgray;
    bottom:-7px;
  }
  
    
 
`;



export const StyledPlayerName = styled.p`
  font-weight: 500;
  text-transform: capitalize;
`;

export const StyledScoreContainer = styled.div`
display: flex;
  flex-direction: column;
  gap:30px 0;
`


export const StyledScoreValue = styled.p`font-size:24px;
font-weight: 800`;



