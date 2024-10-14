import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div
      className={`flex min-h-20 h-full py-4 px-6 bg-secondary text-primary items-center justify-evenly`}
    >
      {children}
    </div>
  );
}
