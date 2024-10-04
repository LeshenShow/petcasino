import { useState } from "react";
import "./Cube.css";
import { getRandomInt, getNewScore } from "./MathLogic";
import { GameTitle } from "./gametitle";
import { CubeArea } from "./cubearea";
import { ResultTable } from "./result_table";

export type GameInfo = {
  choose: number;
  bid: string;
  wish: number;
  try: number;
  guess: number;
  result: number[];
  score: number | string;
  loseStreak: number;
};
export function PetApp() {
  const [gameInfo, setGameInfo] = useState<GameInfo>({
    choose: 1,
    bid: "1x",
    wish: 0,
    try: 0, // result.length
    guess: 0,
    result: [],
    score: 100,
    loseStreak: 0,
  });

  const updateGameInfo = (chosen: number, bid: string) => {
    const newWish = getRandomInt();
    const isWinner = chosen === newWish;
    const newGuess = isWinner ? gameInfo.guess + 1 : gameInfo.guess;
    const newLoseStreak =
      !isWinner && gameInfo.loseStreak + 1
        ? gameInfo.loseStreak + 1
        : gameInfo.loseStreak;
    const newScore = getNewScore(bid, gameInfo.score, isWinner);
    setGameInfo({
      ...gameInfo,
      wish: newWish,
      try: gameInfo.try + 1,
      guess: newGuess,
      result: [...gameInfo.result, newWish],
      score: newScore,
      choose: chosen,
      bid: bid,
      loseStreak: newLoseStreak,
    });
  };

  return (
    <div className="cube-body">
      <CubeArea wish={gameInfo.wish} choose={gameInfo.choose} />
      <GameTitle gameInfo={gameInfo} updateGameInfo={updateGameInfo} />
      <ResultTable result={gameInfo.result} />
    </div>
  );
}
