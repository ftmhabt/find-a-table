import Card, { RestaurantType } from "../index/card";

export default async function Results({
  restaurants,
}: {
  restaurants: RestaurantType[];
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id.toString()} restaurant={restaurant} />
      ))}
    </div>
  );
}
