import RestaurantContainer from "./ui/general/restaurant-container";
import Search from "./ui/general/search";

export default function Loading() {
  return (
    <div>
      <div className="min-h-20 bg-secondary"></div>
      <RestaurantContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            className="animate-pulse bg-slate-200 min-w-[240px] xsm:min-w-[180px] lg:min-w-[200px] h-80 rounded overflow-hidden border cursor"
          ></div>
        ))}
      </RestaurantContainer>
    </div>
  );
}
