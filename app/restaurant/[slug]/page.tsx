import { PrismaClient } from "@prisma/client";
import Hero from "../../ui/general/hero";
import ReserveCard from "../../ui/restaurant/reserve-card";
import RestaurantDetailsCard from "../../ui/restaurant/restaurant-card";
import { error } from "console";

const prisma = new PrismaClient();

interface Restaurant {
  id: Number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

async function fetchRestaurantBySlug(slug: string): Promise<Restaurant> {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
}

export default async function restaurantDatails({
  params,
}: {
  params: { slug: string };
}) {
  const resaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <div>
      <RestaurantDetailsCard
        name={resaurant.name}
        description={resaurant.description}
        photos={resaurant.images.map((image) => image)}
      />
      <ReserveCard />
    </div>
  );
}
