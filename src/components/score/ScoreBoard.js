import {
  StyledScoreValue,
  StyledSingleScoreBox,
  StyledWrapper,
} from "./ScoreBoard.styled";

export const ScoreBoard = ({ score}) => {
  return (
    <StyledWrapper>
      <StyledScoreValue>Score: {score}</StyledScoreValue>
    </StyledWrapper>
  );
};
