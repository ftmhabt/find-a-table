import React from "react";
import RestaurantBar from "./restaurant-bar";
import DishCard from "./dish-card";
import { Item } from "@prisma/client";

export default function MenuCard({
  menu,
  slug,
}: {
  menu: Item[];
  slug: string;
}) {
  return (
    <div>
      <RestaurantBar slug={slug} />
      <div className="p-4 flex flex-col gap-4  max-w-[900px] mx-auto">
        {menu.length > 0 ? (
          menu.map((item) => (
            <DishCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))
        ) : (
          <p>this restaurant doesnt have a menu</p>
        )}
      </div>
    </div>
  );
}
