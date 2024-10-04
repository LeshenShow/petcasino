import clsx from "clsx";

type CubeElementProps = {
  id: number;
  className: {
    active: boolean;
    isWinner: boolean;
  };
};

export function CubeElement(props: CubeElementProps) {
  const className = clsx(
    "cube-element",
    props.className.isWinner && "cube-element-winner"
  );
  return (
    <div className={className}>
      {props.className.active && <div className="circle-element-active" />}
    </div>
  );
}
