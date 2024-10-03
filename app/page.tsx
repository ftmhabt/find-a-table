import Hero from "./ui/general/hero";
import Search from "./ui/general/search";
import { PrismaClient } from "@prisma/client";
import { PiUserCircle } from "react-icons/pi";
import RestaurantContainer from "./ui/general/restaurant-container";

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
      <Hero>
        <Search />
        <PiUserCircle size={30} className="text-primary" />
      </Hero>
      <RestaurantContainer restaurants={restaurants} />
    </div>
  );
}
