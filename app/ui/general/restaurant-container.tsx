import { ReactNode } from "react";

export default async function RestaurantContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap gap-6 justify-evenly p-6 xsm:grid xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {children}
    </div>
  );
}
