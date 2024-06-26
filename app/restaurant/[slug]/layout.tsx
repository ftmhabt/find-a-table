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
  return (
    <>
      <Hero heightClass="h-[300px]">
        <h1>{params.slug}</h1>
      </Hero>
      {children}
    </>
  );
}
