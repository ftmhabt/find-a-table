import { ReactNode } from "react";

export default function Hero({
  heightClass,
  children,
}: {
  heightClass: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col ${heightClass} py-1 bg-red-400 text-white items-center justify-center`}
    >
      {children}
    </div>
  );
}
