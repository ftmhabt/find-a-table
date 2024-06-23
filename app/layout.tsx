import Header from "./ui/general/header";
import "../styles/globals.css";
import Head from "next/head";
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Find a table',
    default: 'Find a table', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-[900px] min-h-[100vh] mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
