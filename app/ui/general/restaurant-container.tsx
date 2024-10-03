import Card, { RestaurantType } from "../index/card";

export default async function RestaurantContainer({
  restaurants,
}: {
  restaurants: RestaurantType[];
}) {
  return (
    <div className="flex flex-wrap gap-6 justify-evenly p-6">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id.toString()} restaurant={restaurant} />
      ))}
    </div>
  );
}
