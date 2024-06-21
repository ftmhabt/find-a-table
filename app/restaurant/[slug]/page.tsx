import Hero from "../../ui/general/hero";
import ReserveCard from "../../ui/restaurant/reserve-card";
import RestaurantDetailsCard from "../../ui/restaurant/restaurant-card";

export default function restaurantDatails() {
  return (
    <div>
      <Hero heightClass="h-[300px]">
        <h1>restaurant name</h1>
      </Hero>
      <RestaurantDetailsCard
        name="rest"
        description="kdfhjdshafeiwahlw"
        photos={[
          "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ]}
      />
      <ReserveCard/>
    </div>
  );
}
