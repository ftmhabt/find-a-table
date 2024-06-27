import React from "react";
import RestaurantBar from "./restaurant-bar";
import DishCard from "./dish-card";
import { Item } from "@prisma/client";

export default function MenuCard({ menu }: { menu: Item[] }) {
  return (
    <div className="max-w-[823px] bg-slate-200 -mt-10 ml-10">
      <RestaurantBar />
      <div className="p-4 flex flex-col gap-4">
        <h1 className="text-2xl">Menu</h1>
        {menu.map((item) => (
          <DishCard
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
