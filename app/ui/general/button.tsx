export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return <button onClick={onClick} className="ml-2 bg-sky-600 rounded px-4 py-1 hover:bg-sky-400 transition-all text-white">{text}</button>;
}
