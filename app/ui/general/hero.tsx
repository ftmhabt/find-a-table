import { ReactNode } from "react";

export default function Hero({
  heightInPixel,
  children,
}: {
  heightInPixel: string;
  children: ReactNode;
}) {
  const heightClass=`h-[${heightInPixel}px]`;
  return (
    <div
      className={`flex flex-col ${heightClass} py-1 bg-red-400 text-white items-center justify-center`}
    >
      {children}
    </div>
  );
}
