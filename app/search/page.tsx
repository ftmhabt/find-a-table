import Hero from "../ui/general/hero";
import Search from "../ui/general/search";
import Results from "../ui/search/results";
import Sidebar from "../ui/search/sidebar";

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
      <div>
      <Results city={city} />
      <Sidebar/>
      </div>
      
    </div>
  );
}
