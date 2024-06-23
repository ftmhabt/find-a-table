import React from "react";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'search'
}
export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
