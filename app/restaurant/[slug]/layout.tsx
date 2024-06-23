import React from "react";
import Hero from "../../ui/general/hero";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero heightClass="h-[300px]">
        <h1>restaurant name</h1>
      </Hero>
      {children}
    </>
  );
}
