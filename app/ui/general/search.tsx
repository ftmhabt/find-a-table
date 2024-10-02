"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { PiMagnifyingGlassLight } from "react-icons/pi";

export default function Search() {
  const [location, setLocation] = useState("");
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams ? searchParams : "");
    if (term) {
      params.set("city", term);
    } else {
      params.delete("city");
    }
    replace(`/search?${params.toString()}`);
  }

  return (
    <div className="flex items-center text-primary bg-white gap-2 min-w-60 max-w-96 px-2 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <PiMagnifyingGlassLight size={25} className="text-[#9CA3AF]" />
      <input
        className="w-full h-8 focus:outline-0 focus:bg-white"
        type="text"
        name="search"
        id="search"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        defaultValue={searchParams?.get("city")?.toString()}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(location);
        }}
      />
    </div>
  );
}
