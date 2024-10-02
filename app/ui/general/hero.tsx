import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div
      className={`flex min-h-20 h-full py-4 bg-secondary text-primary items-center justify-evenly`}
    >
      {children}
    </div>
  );
}
