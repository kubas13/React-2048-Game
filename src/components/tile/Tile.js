import { StyledTile, StyledTileValue } from "./Tile.styled";

export const Tile = ({ value }) => {
  const colors = {
    2: "#FA8072",
    4: "#E9967A",
    8: "#FF7F50",
    16: "#CD5C5C",
    32: "#DC143C",
    64: "#B22222",
    128: "#8B0000",
    256: "#800080",
    512: "#000080",
    1024: "#008080",
    2048: "#DAA520",


  };
  const getColorFromValue = (value) => {
    if (value === 0) return "#F2E9DC";
    return colors[value];
  };

  return (
    <StyledTile bgColor={() => getColorFromValue(value)}>
      <StyledTileValue>{value > 0 ? value : ""}</StyledTileValue>
    </StyledTile>
  );
};
