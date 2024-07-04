import { PrismaClient } from "@prisma/client";
import Hero from "../ui/general/hero";
import Search from "../ui/general/search";
import { RestaurantType } from "../ui/index/card";
import Results from "../ui/search/results";
import Sidebar from "../ui/search/sidebar";
import { equal } from "assert";
import { Interface } from "readline";

interface SearchParams {
  city?: string;
  cuisine?: string;
}
export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
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

  const where: any = {};

  if (searchParams?.city) {
    const location = {
      name: {
        equals: searchParams?.city,
      },
    };
    where.location = location;
  }

  if (searchParams?.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams?.cuisine,
      },
    };
    where.cuisine = cuisine;
  }
  async function fetchRestaurants(
    searchParams: SearchParams
  ): Promise<RestaurantType[]> {
    const restaurant = await prisma.restaurant.findMany({
      where,
      select,
    });

    if (!restaurant) {
      return [];
    }

    return restaurant;
  }

  async function getLocations() {
    return await prisma.location.findMany();
  }

  async function getCuisines() {
    return await prisma.cuisine.findMany();
  }
  const restaurants = await fetchRestaurants(searchParams);
  const locations = await getLocations();
  const cuisines = await getCuisines();
  return (
    <div>
      <Hero heightClass="h-[50px]">
        <Search />
      </Hero>
      <div className="flex gap-6 p-6">
        <Sidebar locations={locations} cuisines={cuisines} />
        <Results restaurants={restaurants} />
      </div>
    </div>
  );
}
