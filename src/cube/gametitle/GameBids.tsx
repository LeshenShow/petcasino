import { GameBid } from "./GameTitle";
import { Button } from "../ui-components/Button";
import clsx from "clsx";

type GameBidsProps = {
  updateGameBid: (newBid: string) => void;
  gameBid: GameBid;
};
export function GameBids(props: GameBidsProps) {
  const mapGameBids = (el: string, i: number) => {
    const className = clsx(
      "game-bid",
      props.gameBid.bid === el && "chosen-game-bid"
    );
    return (
      <Button
        key={i}
        title={el}
        onClick={() => props.updateGameBid(el)}
        className={className}
      />
    );
  };
  const gameBids = props.gameBid.bidArray.map(mapGameBids);
  return <div className="numbers-area">Ставки: {gameBids}</div>;
}
