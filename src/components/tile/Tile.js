import { StyledTile, StyledTileValue } from "./Tile.styled";

export const Tile = ({ value }) => {
  const colors = {
    1: "#ffff33",
    2: "#ffad33",
    4: "#d86400",
    8: "#de4000",
  };
  const getColorFromValue = (value) => {
    if (value === 0) return "#F2E9DC";
    return colors[Math.floor(value % 15)];
  };

  return (
    <StyledTile bgColor={() => getColorFromValue(value)}>
      <StyledTileValue>{value > 0 ? value : ""}</StyledTileValue>
    </StyledTile>
  );
};
