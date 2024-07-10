import Hero from "./ui/general/hero";
import Search from "./ui/general/search";

export default function Loading() {
    return (
        <div>
          <Hero heightClass="h-[200px]">
            <h1>find your table for any occasion</h1>
            <Search />
          </Hero>
          <div className="flex flex-wrap p-6 gap-4">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
              <div key={num} className="animate-pulse bg-slate-200 w-[200px] h-72 rounded overflow-hidden border cursor"></div>
            ))}
          </div>
        </div>
      );
}
