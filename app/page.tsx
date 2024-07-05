import Hero from "./ui/general/hero";
import Search from "./ui/general/search";
import Card from "./ui/index/card";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function FetchRestaurants() {
  const restaurants = prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
      reviews: true,
    },
  });
  return restaurants;
}
export default async function Index() {
  const restaurants = await FetchRestaurants();
  return (
    <div>
      <Hero heightClass="h-[200px]">
        <h1>find your table for any occasion</h1>
        <Search />
      </Hero>
      <div className="flex flex-wrap p-6 gap-4">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
