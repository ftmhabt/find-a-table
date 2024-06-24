import { Cuisine, Location, PRICE } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export interface RestaurantType {
  id:Number;
  name:string;
  main_image:string;
  cuisine:Cuisine;
  location:Location;
  price:PRICE;
  slug:string;
}

export default function Card({restaurant}:{restaurant:RestaurantType}) {
  return (
    <div className="w-[200px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <Link href={`restaurant/${restaurant.slug}`}>
      <img
        src={restaurant.main_image}
        height={120}
        alt={restaurant.name}
      />
      <div className="flex flex-col gap-2 p-2">
        <h1>{restaurant.name}</h1>
        <div>
        <div>{restaurant.cuisine.name}</div>
        <div>{restaurant.location.name}</div>
        <div>{restaurant.price}</div>
        </div>
        <div>booked 3 times today</div>
      </div>
      </Link>
    </div>
  );
}
