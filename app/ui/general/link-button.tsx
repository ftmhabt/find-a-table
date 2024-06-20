import Link from "next/link";
export default function LinkButton({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return <Link className="ml-2 bg-orange-300 rounded px-4 py-1 hover:bg-orange-400 transition-all" href={url}>{text}</Link>;
}
