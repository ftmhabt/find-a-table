import Hero from "../ui/general/hero";
import Search from "../ui/general/search";
import Results from "../ui/search/results";
import Sidebar from "../ui/search/sidebar";

export default function SearchPage({
  searchParams,
}: {
  searchParams?: {
    city?: string;
    cuisine?:string;
  };
}) {
  const city = searchParams?.city || "";
  const cuisine = searchParams?.cuisine || "";
  return (
    <div>
      <Hero heightClass="h-[50px]">
        <Search />
      </Hero>
      <div className="flex gap-6 p-6">
        <Sidebar />
        <Results city={city} cuisine={cuisine}/>
      </div>
    </div>
  );
}
