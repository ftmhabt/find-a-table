import Link from "next/link";
export default function LinkButton({
  text,
  url,
}: {
  text: string;
  url: string;
}) {
  return <Link className="ml-2 bg-sky-600 rounded px-4 py-1 hover:bg-sky-400 transition-all text-white" href={url}>{text}</Link>;
}
