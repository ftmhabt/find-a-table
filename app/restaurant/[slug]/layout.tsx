import React, { useContext } from "react";
import { Metadata } from "next";
import Header from "../../ui/restaurant/header";
import { MdTableBar } from "react-icons/md";
import Link from "next/link";
import { AuthorizationContext } from "../../context/AuthContext";

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
  const { error } = useContext(AuthorizationContext);
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
      {error ? error : children}
    </>
  );
}
