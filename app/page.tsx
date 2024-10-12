import { PrismaClient } from "@prisma/client";
import RestaurantContainer from "./ui/general/restaurant-container";
import Card from "./ui/general/card";
import Header from "./ui/general/header";

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
    <>
      <Header />
      <RestaurantContainer>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id.toString()} restaurant={restaurant} />
        ))}
      </RestaurantContainer>
    </>
  );
}
