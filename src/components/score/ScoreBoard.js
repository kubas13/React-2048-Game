import {
  StyledScoreValue,
  StyledWrapper,
} from "./ScoreBoard.styled";

export const ScoreBoard = ({ score}) => {
  return (
    <StyledWrapper>
      <StyledScoreValue>Score: {score}</StyledScoreValue>
    </StyledWrapper>
  );
};
