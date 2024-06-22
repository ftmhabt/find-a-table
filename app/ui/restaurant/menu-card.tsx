import React from "react";
import RestaurantBar from "./restaurant-bar";
import DishCard from "./dish-card";

export default function MenuCard() {
  return (
    <div className="max-w-[823px] bg-slate-200 -mt-10 ml-10">
      <RestaurantBar />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl">Menu</h1>
        <DishCard
          name="totot"
          description="Compiled in 165ms (270 modules)"
          price={50}
        />
      </div>
    </div>
  );
}
