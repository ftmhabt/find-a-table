"use server";
import { PrismaClient, Restaurant } from "@prisma/client";

const prisma = new PrismaClient();

async function fetchRestaurantsByLocation(
  city: string | null
): Promise<Restaurant[]> {
  if (!city) return await prisma.restaurant.findMany();

  const restaurant = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city,
        },
      },
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
}

export default async function Results({ city }: { city: string | null }) {
  const restaurants = await fetchRestaurantsByLocation(city);
  return <div>{restaurants.map((restaurant) => restaurant.name)}</div>;
}
