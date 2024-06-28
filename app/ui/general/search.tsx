"use client";
import { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function Search() {
  const [location, setLocation] = useState("");
  const router = useRouter();
  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <Button
        text="lets go"
        onClick={() => {
          if (location === "") return;
          router.push(`/search?city=${location}`);
          setLocation('');
        }}
        style="bg-black px-[1rem] py-[.25rem] text-white"
      />
    </div>
  );
}
