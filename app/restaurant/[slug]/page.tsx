import { PrismaClient, Review } from "@prisma/client";
import Hero from "../../ui/general/hero";
import ReserveCard from "../../ui/restaurant/reserve-card";
import RestaurantDetailsCard from "../../ui/restaurant/restaurant-card";
import { error } from "console";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export interface Restaurant {
  id: Number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
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
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
}

export default async function restaurantDatails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <div>
      <RestaurantDetailsCard restaurant={restaurant} slug={params.slug} />
      <ReserveCard
        open_time={restaurant.open_time}
        close_time={restaurant.close_time}
        slug={params.slug}
      />
    </div>
  );
}
