"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RestaurantBar({ slug }: { slug: string }) {
  const pathname = usePathname();
  return (
    <div className="bg-secondary text-center">
      <ul className="max-w-[900px] mx-auto grid grid-cols-2 text-center px-2 *:py-2">
        <li
          className={`${
            pathname == `/restaurant/${slug}` &&
            "font-bold bg-white rounded-t-xl"
          }`}
        >
          <Link href={`/restaurant/${slug}`}>Overview</Link>
        </li>
        <li
          className={`${
            pathname == `/restaurant/${slug}/menu` &&
            "font-bold bg-white rounded-t-xl"
          }`}
        >
          <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
        </li>
      </ul>
    </div>
  );
}
