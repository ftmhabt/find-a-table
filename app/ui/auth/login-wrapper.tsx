import React, { ReactElement, ReactNode } from "react";

export default function LoginWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center gap-3">{children}</div>;
}
