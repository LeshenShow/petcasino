import { GameNumber } from "./GameTitle";
import { Button } from "../ui-components/Button";
import clsx from "clsx";

type GameNumbersProps = {
  updateGameNumber: (newChosen: number) => void;
  gameNumber: GameNumber;
};
export function GameNumbers(props: GameNumbersProps) {
  const mapGameNumber = (el: number, i: number) => {
    const className = clsx(
      "game-number",
      el === props.gameNumber.chosen && "chosen-game-number"
    );
    return (
      <Button
        key={i}
        onClick={() => props.updateGameNumber(el)}
        value={el}
        title={el.toString()}
        className={className}
      />
    );
  };
  const gameNumbers = props.gameNumber.numberArray.map(mapGameNumber);
  return <div className="numbers-area">Выбери: {gameNumbers}</div>;
}
