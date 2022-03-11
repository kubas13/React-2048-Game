import { StyledTile, StyledTileValue } from "./Tile.styled";

export const Tile = ({ value }) => {
  const colors = {
    1: "#F72585",
    2: "#A0522D",
    4: "#A52A2A",
    8: "#800000",
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
