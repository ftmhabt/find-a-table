import React from "react";
import Hero from "../../ui/general/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "restaurant",
};
export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  function renderName(name: string) {
    const nameArray = name.split("-");
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;
    return nameArray.join(" ");
  }
  return (
    <>
      <Hero heightClass="h-[300px]">
        <h1 className="capitalize text-3xl">{renderName(params.slug)}</h1>
      </Hero>
      {children}
    </>
  );
}
