import Hero from "../ui/general/hero";
import Search from "../ui/general/search";
import Results from "../ui/search/results";

export default function SearchPage({
  searchParams,
}: {
  searchParams?: {
    city?: string;
  };
}) {
  const city = searchParams?.city || "";
  return (
    <div>
      <Hero heightClass="h-[50px]">
        <Search />
      </Hero>
      <Results city={city} />
    </div>
  );
}
