import React from "react";
import { Metadata } from "next";
import Header from "../../ui/restaurant/header";
import { MdTableBar } from "react-icons/md";
import Link from "next/link";

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
      <Header>
        <h1 className="capitalize text-xl">{renderName(params.slug)}</h1>
        <Link href={"/"} className="flex gap-2 font-bold">
          <MdTableBar size={25} />
          <p className="hidden lg:block">find a table</p>
        </Link>
      </Header>
      {children}
    </>
  );
}
