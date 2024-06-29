"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getLocations() {
  return await prisma.location.findMany();
}

async function getCuisines() {
  return await prisma.cuisine.findMany();
}

export default async function Sidebar() {
  const locations = await getLocations();
  const cuisines = await getCuisines();
  return (
    <div className="w-[500px]">
      <h1 className="text-xl font-bold py-1">Location</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
      <h1 className="text-xl font-bold py-1">Cuisine</h1>
      <ul>
        {cuisines.map((cuisine) => (
          <li key={cuisine.id}>{cuisine.name}</li>
        ))}
      </ul>
    </div>
  );
}
