import { PrismaClient, Table } from "@prisma/client";
import { times } from "../../data";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function findAvailableTables({
  time,
  day,
  res,
  restaurant,
}: {
  time: string;
  day: string;
  res: NextApiResponse;
  restaurant: {
    open_time: string;
    close_time: string;
    tables: Table[];
  };
}) {
  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return res.status(400).json({
      errorMessage: "time format is invalid",
    });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      tables: true,
      booking_time: true,
    },
  });

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const tables = restaurant.tables;

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return { date: new Date(`${day}T${searchTime}`), time: searchTime, tables };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObj[t.date.toString()]) {
        if (bookingTablesObj[t.date.toString()][table.id]) return false;
      }
      return true;
    });
  });

  return searchTimesWithTables;
}
