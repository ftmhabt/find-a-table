import Hero from "./ui/general/hero";
import Search from "./ui/general/search";

export default function Index() {
  return (
    <Hero  heightClass="h-[200px]">
      <h1>find your table for any occasion</h1>
      <Search />
    </Hero>
  );
}
