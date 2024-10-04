type GameTitleInfoProps = {
  value?: number | string;
  title?: string;
};
export function GameTitleInfo({ title, value }: GameTitleInfoProps) {
  return (
    <div className="game-title-info">
      <span>{title}</span>
      <span className="game-title-value">{value}</span>
    </div>
  );
}
