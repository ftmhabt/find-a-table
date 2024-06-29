import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getLocations() {
  return await prisma.location.findMany();
}
export default async function Sidebar() {
  const locations = await getLocations();
  return (
    <div>
      <h1>Location</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
      <h1>Cuisine</h1>
      <ul>
        <li></li>
      </ul>
    </div>
  );
}
