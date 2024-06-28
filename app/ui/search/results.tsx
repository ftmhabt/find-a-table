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

async function fetchRestaurantsByLocation(
  city: string | null
): Promise<RestaurantType[]> {

  if (!city)
    return await prisma.restaurant.findMany({
      select,
    });

  const restaurant = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
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

export default async function Results({ city }: { city: string | null }) {
  const restaurants = await fetchRestaurantsByLocation(city);
  return (
    <div className="flex flex-wrap p-6 gap-4">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id.toString()} restaurant={restaurant} />
      ))}
    </div>
  );
}
