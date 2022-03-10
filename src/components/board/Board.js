import { useState, useEffect } from "react";
import { Tile } from "../tile/Tile";
import { ScoreBoard } from "../score/ScoreBoard";
import {db} from '../../firebase/config';
import {
  initiateBoard,
  move,
  getEmptyTilesIndexes,
  addRandomTile,
} from "./board_functions";
import {
  StyledGameOverModal,
  StyledWrapper,
  StyledGameBoardWrapper,
  StyledGameOverText,
  StyledGameBoard,
} from "./board.styled";
import Button from "../Button/Button";
import {useAuthContext} from "../../hooks/useAuthContext";
import userEvent from "@testing-library/user-event";
import {addDoc, collection} from "firebase/firestore";

const GameOverDiv = ({ status }) => {
  return (
    <StyledGameOverModal>
      <StyledGameOverText>
        {status === "won" ? "youHaveWonOU WON!" : "GAME OVER"}
      </StyledGameOverText>
    </StyledGameOverModal>
  );
};





export const Board = (props) => {
  const [tiles, setTiles] = useState(initiateBoard());
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const {user} = useAuthContext()




  useEffect(() => {
    if (gameStatus === false) {
      document.addEventListener("keydown", keyPressHandler);
    }

    return () => {
      document.removeEventListener("keydown", keyPressHandler);
    };
  });

  useEffect(() => {
    checkGameStatus(tiles);

  }, [tiles]);




  const handleSaveScore  = async () => {



    const scoreOBJ = {

      name:user.displayName,
      email: user.email,
      id:user.uid,
      score
    }


    await addDoc(collection(db,'scores'), scoreOBJ)

    restartHandler()


  }

  const increaseScore = (value) => {
    setScore(score + value);
  };

  const checkGameStatus = (tiles) => {
    const tilesFlatArray = [].concat(...tiles);
    const emptyTiles = getEmptyTilesIndexes(tilesFlatArray);
    if (emptyTiles.length < 1) {
      setGameStatus("lost");
    }
    if (tilesFlatArray.includes(2048)) {
      setGameStatus("won");
    }
  };

  const keyPressHandler = (e) => {
    const prevTiles = [].concat(...tiles);
    let newTiles = [];
    let moveScore = 0;

    switch (e.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
        [newTiles, moveScore] = move(tiles, e.key, increaseScore);
        break;

      default:
        return;
    }

    // Check if move changed board. If so, add new random tile.
    const nothingHappened = prevTiles.every(
      (tile, index) => tile === [].concat(...newTiles)[index]
    );
    newTiles = nothingHappened ? newTiles : addRandomTile(newTiles);

    increaseScore(moveScore);
    setTiles([...newTiles]);
  };

  const restartHandler = () => {
    setGameStatus(false);
    setScore(0);
    setTiles(initiateBoard());
  };

  return (
    <StyledWrapper>
      <ScoreBoard score={score}  />
      <StyledGameBoardWrapper>
        <StyledGameBoard>
          {gameStatus ? <GameOverDiv status={gameStatus} /> : null}
          {tiles.map((row, i) => {
            return row.map((tile, i) => <Tile key={i} value={tile} />);
          })}
        </StyledGameBoard>
      </StyledGameBoardWrapper>
      {gameStatus ? <Button onClick={restartHandler} >Restart</Button> : null}
      {gameStatus ? <Button onClick={handleSaveScore} >Save score</Button> : null}
    </StyledWrapper>
  );
};
