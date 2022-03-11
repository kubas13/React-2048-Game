import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: max-content;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:20px 0;
`;

export const StyledGameOverModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.grey};
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledGameOverText = styled.p`
  font-size: ${props => props.theme.fontSizes.M};
  font-weight: ${props => props.theme.fontWeight.semiBold};
`;

export const StyledGameBoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const StyledGameBoard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-template-rows: repeat(4, 120px);
  gap: 5px;
  
  @media (max-width: 550px) {
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(4, 80px);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: repeat(4, 70px);
  }
`;
