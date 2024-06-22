import Hero from "./ui/general/hero";
import Search from "./ui/general/search";
import Card from "./ui/index/card";

export default function Index() {
  return (
    <div>
      <Hero heightClass="h-[200px]">
        <h1>find your table for any occasion</h1>
        <Search />
      </Hero>
      <div className="flex flex-wrap p-6 gap-4">
        <Card/>
      </div>
    </div>
  );
}
