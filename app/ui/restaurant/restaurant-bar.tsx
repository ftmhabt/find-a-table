import Link from "next/link";

export default function RestaurantBar({slug}:{slug:string}) {
  return (
    <ul className="flex gap-4 px-4 py-2">
      <li><Link href={`/restaurant/${slug}`}>Overview</Link></li>
      <li><Link href={`/restaurant/${slug}/menu`}>Menu</Link></li>
    </ul>
  );
}
