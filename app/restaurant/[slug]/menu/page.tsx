import Hero from "../../../ui/general/hero";
import MenuCard from "../../../ui/restaurant/menu-card";

export default function restaurantMenu() {
  return (
    <div>
      <Hero heightClass="h-[300px]">
        <h1>restaurant name</h1>
      </Hero>
      <MenuCard/>
    </div>
  );
}
