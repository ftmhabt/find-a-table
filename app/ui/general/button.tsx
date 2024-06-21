export default function Button({
  text,
  onClick,
  style
}: {
  text: string;
  onClick: () => void;
  style: string;
}) {
  return <button onClick={onClick} className={style}>{text}</button>;
}
