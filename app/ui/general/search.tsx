"use client";
import { useState } from "react";
import Button from "./button";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

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
    <div className="flex text-black">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        defaultValue={searchParams?.get('city')?.toString()}
      />
      <Button
        text="lets go"
        onClick={() => handleSearch(location)}
        style="bg-black px-[1rem] py-[.25rem] text-white"
      />
    </div>
  );
}
