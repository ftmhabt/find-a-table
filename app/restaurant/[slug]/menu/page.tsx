import { PrismaClient } from "@prisma/client";
import MenuCard from "../../../ui/restaurant/menu-card";

const prisma = new PrismaClient();

async function fetchRestaurantMenu(slug: string) {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
}
export default async function restaurantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const items = await fetchRestaurantMenu(params.slug);
  return (
    <div>
      <MenuCard menu={items} slug={params.slug}/>
    </div>
  );
}
