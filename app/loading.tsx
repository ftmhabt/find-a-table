import { PiUserCircle } from "react-icons/pi";
import Hero from "./ui/general/hero";
import RestaurantContainer from "./ui/general/restaurant-container";
import Search from "./ui/general/search";

export default function Loading() {
  return (
    <div>
      <Hero>
        <Search />
        <PiUserCircle size={30} className="text-primary" />
      </Hero>
      <RestaurantContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            className="animate-pulse bg-slate-200 w-72 h-80 rounded overflow-hidden border cursor"
          ></div>
        ))}
      </RestaurantContainer>
    </div>
  );
}
