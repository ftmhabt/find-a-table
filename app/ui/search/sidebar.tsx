import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../../search/page";

export default async function Sidebar({
  locations,
  cuisines,
  searchParams
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams:SearchParams;
}) {
  return (
    <div>
      <h1 className="text-xl font-bold py-1">Location</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <Link
              href={{
                pathname: "search/",
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
            >
              {location.name}
            </Link>
          </li>
        ))}
      </ul>
      <h1 className="text-xl font-bold py-1">Cuisine</h1>
      <ul>
        {cuisines.map((cuisine) => (
          <li key={cuisine.id}>
            <Link
              href={{
                pathname: "search/",
                query: {
                  ...searchParams,
                  cuisine: cuisine.name,
                },
              }}
            >
              {cuisine.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
