import { PrismaClient } from "@prisma/client";
import ReservationForm from "../../ui/reservation/reservation-form";
import ReservationInfo from "../../ui/reservation/reservation-info";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function Reserve({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { day: string; time: string; partySize: number };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-4 p-4">
      <p>youre almost done</p>
      <ReservationInfo
        image={restaurant.main_image}
        name={restaurant.name}
        day={searchParams.day}
        time={searchParams.time}
        partySize={searchParams.partySize}
      />
      <ReservationForm
        slug={params.slug}
        day={searchParams.day}
        time={searchParams.time}
        partySize={searchParams.partySize}
      />
    </div>
  );
}
