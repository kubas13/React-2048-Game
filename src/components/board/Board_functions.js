const initiateBoard = () => {
  const tiles = Array(4).fill(Array(4).fill(0));
  return addRandomTile(tiles, 2);

};


const zerosToBottom = (a, b) => {
  if (a !== 0 && b === 0) return 1;
  else if (a === 0 && b !== 0) return -1;
  return 0;
};

const transposeMatrix = (arr) =>
  arr[0].map((row, colIndex) => arr.map((row) => row[colIndex]));


const move = (tiles, direction, increaseScoreFunction) => {
  let collided = [];
  let tempScore = 0;
  let moveScore = 0;

  if (direction === "ArrowUp" || direction === "ArrowDown") {
    tiles = transposeMatrix(tiles);
  }

  if (direction === "ArrowRight" || direction === "ArrowDown") {
    tiles = tiles.map((row) => {
      row.sort(zerosToBottom);
      [collided, tempScore] = handleCollisions(
        row,
        "ArrowRight",
        increaseScoreFunction
      );
      moveScore += tempScore;
      collided.sort(zerosToBottom);
      return collided;
    });
  } else if (direction === "ArrowLeft" || direction === "ArrowUp") {
    tiles = tiles.map((row) => {
      row.reverse();
      row.sort(zerosToBottom);
      [collided, tempScore] = handleCollisions(
        row,
        "ArrowLeft",
        increaseScoreFunction
      );
      moveScore += tempScore;
      collided.sort(zerosToBottom);
      collided.reverse();
      return collided;
    });
  }

  if (direction === "ArrowUp" || direction === "ArrowDown") {
    tiles = transposeMatrix(tiles);
  }

  return [tiles, moveScore];
};

const handleCollisions = (row, direction) => {
  let dir = 1;
  let score = 0;

  if (direction === "ArrowRight" || direction === "ArrowDown") {
    row.reverse();
    dir = -1;
  }

  for (let i = 0; i < row.length; i++) {
    if (row[i] === row[i + dir] && row[i] > 0) {
      let newValue = row[i] + row[i + dir];
      row[i] = newValue;
      row[i + dir] = 0;
      score += newValue;
    }
  }

  if (direction === "ArrowRight" || direction === "ArrowDown") {
    row.reverse();
  }


  return [row, score];
};

const getEmptyTilesIndexes = (tiles) => {
  const emptyTilesIndexes = [];

  tiles.forEach((item, index) => {
    if (item === 0) {
      emptyTilesIndexes.push(index);
    }
  });

  return emptyTilesIndexes;

};


const makeRows = (flatArr) => {
  const rows = [];
  let i;

  for (i = 0; i < flatArr.length; i += 4) {
    rows.push(flatArr.slice(i, i + 4));
  }
  return rows;
};



const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const addRandomTile = (tiles, no = 1) => {
  const tilesFlatArray = [].concat(...tiles);
  for (let i = 0; i < no; i++) {
    const emptyTiles = getEmptyTilesIndexes(tilesFlatArray);
    const randTileIndex = getRandom(emptyTiles);
    const randValue = getRandom([2, 4]);
    tilesFlatArray[randTileIndex] = randValue;
  }

  return makeRows(tilesFlatArray);
};

export {
  initiateBoard,
  zerosToBottom,
  transposeMatrix,
  move,
  handleCollisions,
  getEmptyTilesIndexes,
  makeRows,
  getRandom,
  addRandomTile,
};
