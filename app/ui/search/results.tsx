"use server";
import { PrismaClient, Restaurant } from "@prisma/client";
import Card, { RestaurantType } from "../index/card";

const prisma = new PrismaClient();

const select = {
  id: true,
  name: true,
  main_image: true,
  cuisine: true,
  location: true,
  price: true,
  slug: true,
};

async function fetchRestaurants(
  city: string,
  cuisine: string,
): Promise<RestaurantType[]> {
  if (!city)
    return await prisma.restaurant.findMany({
      select,
    });

  const restaurant = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()||'',
        },
      },
      cuisine: {
        name: {
          equals: cuisine.toLowerCase()||'',
        },
      },
    },
    select,
  });

  if (!restaurant) {
    return [];
  }

  return restaurant;
}

export default async function Results({ city,cuisine }: { city: string ,cuisine:string}) {
  if (!city) return <div>hhhh</div>;

  const restaurants = await fetchRestaurants(city,cuisine);
  return (
    <div className="flex flex-wrap gap-4">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id.toString()} restaurant={restaurant} />
      ))}
    </div>
  );
}
