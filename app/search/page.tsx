"use client";
import Hero from "../ui/general/hero";
import Search from "../ui/general/search";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const city = searchParams?.get("city");

  return (
    <div>
      <Hero heightClass="h-[50px]">
        <Search />
      </Hero>
      <div>{city}</div>
    </div>
  );
}
