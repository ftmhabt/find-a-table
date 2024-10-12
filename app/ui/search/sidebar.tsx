import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";
import { SearchParams } from "../../search/page";

export default async function Sidebar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: SearchParams;
}) {
  return (
    <div className="p-6 pt-0 bg-secondary">
      <h1 className="text-xs font-bold py-1">Location</h1>
      <ul className="flex gap-5 *:border-primary *:border *:px-2 *:rounded-md mb-2">
        {locations.map((location) => (
          <li
            key={location.id}
            className={
              location.name === searchParams.city ? "bg-primary text-white" : ""
            }
          >
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

      <h1 className="text-xs font-bold py-1">Cuisine</h1>
      <ul className="flex gap-5 *:border-primary *:border *:px-2 *:rounded-md">
        {cuisines.map((cuisine) => (
          <li
            key={cuisine.id}
            className={
              cuisine.name === searchParams.cuisine
                ? "bg-primary text-white"
                : ""
            }
          >
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
